import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ experiences }) => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
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
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
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

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-b from-indigo-400 to-indigo-900 min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto flex px-6">
        {/* Timeline */}
        <div className="w-1/4 pr-6">
          <div className="sticky top-20">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-400" />
              <div className="space-y-16 pl-10 pt-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                        activeIndex === idx
                          ? "border-indigo-500 bg-white"
                          : "border-gray-400 bg-gray-300"
                      } absolute -left-[22px] top-1.5`}
                    />
                    <p
                      className={`text-sm transition-all duration-300 ${
                        activeIndex === idx
                          ? "text-white font-semibold"
                          : "text-gray-300"
                      }`}
                    >
                      {exp.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div
          className="w-3/4 pl-8 overflow-y-auto scroll-smooth"
          style={{ scrollSnapType: "y mandatory" }}
        >
          {/* First Card: Always visible at page load */}
          <div className="h-screen flex items-center justify-center scroll-snap-start">
            <div
              ref={(el) => (sectionsRef.current[0] = el)}
              className="bg-white rounded-2xl shadow-2xl px-14 py-12 w-full max-w-4xl"
            >
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                {experiences[0].title}
              </h2>
              <p className="text-lg font-medium text-gray-500 mb-6">
                {experiences[0].company} | {experiences[0].duration}
              </p>
              <ul className="list-disc text-left ml-6 text-gray-700 space-y-3 text-base leading-relaxed">
                {experiences[0].responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Remaining Cards */}
          {experiences.slice(1).map((exp, idx) => (
            <div
              key={idx + 1}
              ref={(el) => (sectionsRef.current[idx + 1] = el)}
              className="h-screen flex items-center justify-center scroll-snap-start"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="bg-white rounded-2xl shadow-2xl px-14 py-12 w-full max-w-4xl">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">{exp.title}</h2>
                <p className="text-lg font-medium text-gray-500 mb-6">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="list-disc text-left ml-6 text-gray-700 space-y-3 text-base leading-relaxed">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Bottom spacer */}
          <div className="h-[50vh]" />
        </div>
      </div>
    </div>
  );
};

export default Experience;