import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ name }) => {
  const screenRef = useRef(null);
  const standRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      screenRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(
      standRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6" // overlap with screen
    );
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
      {/* Mac screen mockup */}
      <div className="flex flex-col items-center">
        <div
          ref={screenRef}
          className="w-[700px] h-[400px] bg-[#111] rounded-3xl border-4 border-[#1e293b] flex items-center justify-center shadow-2xl"
        >
          <div className="w-[90%] h-[85%] bg-gray-100 text-black rounded-xl flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl font-bold text-center">
              Hi, I'm {name}{" "}
              <span className="inline-block animate-wiggle">👋</span>
            </h1>
            <div className="w-2/3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-1/3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Mac stand */}
        <div
          ref={standRef}
          className="w-[100px] h-[60px] bg-[#2c2f3a] rounded-b-xl mt-2 shadow-md"
        ></div>
      </div>
    </section>
  );
};

export default Hero;