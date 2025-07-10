import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineBar = ({ experiences, activeIndex }) => {
  const lineRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !lineRef.current) return;

    const total = experiences.length - 1;

    gsap.to(lineRef.current, {
      width: `${(activeIndex / total) * 100}%`,
      duration: 0.3,
      ease: "power2.out"
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      endTrigger: "#experience-end",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });
  }, [activeIndex, experiences.length]);

  return (
    <div
      ref={wrapperRef}
      className="w-full bg-black py-4 px-8 border-b border-gray-700 z-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            style={{ width: "0%" }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-400 font-medium">
          {experiences.map((exp, idx) => (
            <span
              key={idx}
              className={`transition-colors duration-300 ${
                activeIndex === idx ? "text-pink-400 font-bold" : ""
              }`}
            >
              {exp.duration}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineBar;