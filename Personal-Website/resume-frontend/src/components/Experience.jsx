import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ experiences }) => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const durationRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });

        gsap.fromTo(
          section,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate active duration label
  useEffect(() => {
    durationRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      if (idx === activeIndex) {
        gsap.to(ref, {
          color: "#ec4899", // Tailwind pink-400
          scale: 1.15,
          x: 10,
          fontWeight: 700,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(ref, {
          color: "#a1a1aa", // Tailwind gray-400
          scale: 1,
          x: 0,
          fontWeight: 500,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen py-20">
      <div className="flex max-w-6xl mx-auto px-6 space-x-8">
        {/* Durations column */}
        <div className="flex flex-col items-end justify-between py-8 mr-4 min-w-[7rem]">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              ref={el => (durationRefs.current[idx] = el)}
              className={`transition-all duration-300 text-base font-semibold mb-16 whitespace-nowrap ${
                activeIndex === idx ? "text-pink-400" : "text-gray-400"
              }`}
              style={{ minHeight: "5.5rem" }}
            >
              {exp.duration}
            </div>
          ))}
        </div>
        {/* Timeline and content */}
        <div className="relative flex-1">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-800 z-0">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-pink-500 to-purple-500 z-10"
              style={{
                height: `${((activeIndex + 1) / experiences.length) * 100}%`,
                transition: 'height 2s ease'
              }}
            />
          </div>
          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                ref={el => (sectionsRef.current[idx] = el)}
                className="scroll-snap-start"
                style={{ scrollSnapAlign: "center" }}
              >
                <div className={`p-[2px] rounded-2xl shadow-xl transition-all duration-500 w-[85%] ml-12 ${
                  activeIndex === idx
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600"
                    : "border border-transparent opacity-50"
                }`}>
                  <div className="rounded-2xl px-10 py-10 bg-[#0e1012] text-white">
                    <h2 className="text-3xl font-bold text-pink-400 mb-4">
                      {exp.title}
                    </h2>
                    <p className="text-md font-medium text-gray-400 mb-6">
                      {exp.company}
                    </p>
                    <ul className="list-disc text-left ml-6 text-gray-300 space-y-3 text-base leading-relaxed">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;