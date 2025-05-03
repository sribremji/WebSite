import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const [resume, setResume] = useState(null);
  const [section, setSection] = useState("intro");

  useEffect(() => {
    fetch("http://localhost:8080/api/resume")
      .then(res => res.json())
      .then(data => setResume(data))
      .catch(console.error);
  }, []);

  if (!resume) return <div className="text-center p-10">Loading resume...</div>;

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar name={resume.name} role={resume.title} onSelect={setSection} />
      <div className="ml-64 p-8 w-full">
        {section === "intro" && <Intro resume={resume} />}
        {section === "experience" && <Experience experiences={resume.experiences} />}
        {section === "contact" && <Contact contact={resume.contact} />}
      </div>
    </div>
  );
}

export default App;
