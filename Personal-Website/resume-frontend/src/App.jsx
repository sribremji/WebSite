import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Layout from './components/Layout';
import ICanDo from './components/ICanDo';
import TerminalSection from './components/TerminalSection';
import DeveloperIntro from './components/DeveloperIntro';

import './index.css';

function App() {
  const [resume, setResume] = useState(null);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/resume')
      .then((res) => res.json())
      .then((data) => setResume(data))
      .catch((err) => console.error(err));
  }, []);

  if (!resume) return <div className="text-center p-10 text-white">Loading resume...</div>;

  return (
    <>
      {!introDone && <DeveloperIntro onComplete={() => setIntroDone(true)} />}
      {introDone && (
        <Layout>
          <div className="relative">
            <div id="dev-header" className="relative w-full z-40 mt-4"></div>

            <div className="min-h-screen w-full text-white pt-18">
              <div className="fixed top-6 right-10 z-50 flex gap-4">
                {["About", "Experience", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const target = document.getElementById(item.toLowerCase());
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="relative inline-block px-6 py-2 text-white font-semibold rounded-lg bg-black group overflow-hidden border border-transparent transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
                    <span className="relative z-10">{item}</span>
                  </button>
                ))}
              </div>


              <Hero name={resume.name} title={resume.title} summary={resume.summary} />


              <section id="about" className="h-screen flex items-center justify-center">

                <TerminalSection summary={resume.summary} />

              </section>

              <section>
                <ICanDo />
              </section>

              <section id="experience" className="pt-40">
                <Experience experiences={resume.experiences} />
              </section>

              <section>
                <Skills skills={resume.skills} skillDetails={resume.skillDetails} />
              </section>

              <section id="contact" className="min-h-screen flex items-center justify-center">
                <Contact contact={resume.contact} />
              </section>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default App;