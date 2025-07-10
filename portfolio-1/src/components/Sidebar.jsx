import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Sidebar = ({ name, role, onSelect }) => {
  const sections = ["intro", "experience", "contact"];
  const [dark, setDark] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    setDark(storedMode === "dark");
  }, []);

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="bg-white dark:bg-gray-900 text-black dark:text-white w-64 fixed h-full flex flex-col justify-between"
    >
      <div>
        <div className="text-center py-8 border-b border-gray-700 dark:border-gray-300">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-sm">{role}</p>
        </div>

        <nav className="mt-8 space-y-2 px-6">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => onSelect(s)}
              className="block w-full text-left py-2 hover:bg-gray-700 dark:hover:bg-gray-300 rounded px-3 transition"
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </nav>

        <div className="mt-6 px-6 flex items-center justify-between text-sm">
          <span>Mode</span>
          <div
            onClick={() => setDark(!dark)}
            className={`w-14 h-8 flex items-center bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400 rounded-full p-1 cursor-pointer transition-all duration-300 ${dark ? "justify-end" : "justify-start"}`}
          >
            <div className="bg-white w-6 h-6 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <button className="bg-white text-gray-900 w-full py-2 rounded mb-3">Download Resume</button>
        <a
          href="mailto:sribremji1994@gmail.com?subject=Let's Connect"
          className="block text-center border-2 border-black dark:border-white text-black dark:text-white font-semibold py-2 px-4 rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          Send Message
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;