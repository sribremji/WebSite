import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TerminalSection = ({ summary }) => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-transparent text-white px-6"
    >
      <div className="bg-[#111] rounded-2xl p-6 md:p-8 w-full max-w-4xl shadow-lg border border-gray-700">
        {/* Window bar */}
        <div className="flex space-x-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <pre className="text-green-300 text-sm md:text-lg font-mono whitespace-pre-wrap leading-relaxed">
{`//\n${summary.trim()}\n//`}
        </pre>
      </div>
    </section>
  );
};

export default TerminalSection;