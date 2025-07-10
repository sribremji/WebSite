import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalTimeline = ({ experiences, activeIndex }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.to(lineRef.current, {
      width: `${(activeIndex / (experiences.length - 1)) * 100}%`,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [activeIndex, experiences.length]);

  return (
    <div className="sticky top-0 z-40 bg-black py-6">
      <div className="relative w-full max-w-6xl mx-auto px-6">
        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            ref={lineRef}
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 transition-all"
            style={{ width: "0%" }}
          />
        </div>
        <div className="flex justify-between mt-4 text-sm text-gray-400">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`flex-shrink-0 text-center w-full ${
                i === activeIndex ? "text-pink-400 font-semibold" : ""
              }`}
            >
              {exp.duration}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;