import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DeveloperIntro = ({ onComplete }) => {
  const container = useRef();
  const lineRef = useRef();
  const devWord = useRef();
  const leftAngle = useRef();
  const rightAngle = useRef();
  const slashWrap = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete?.(),
    });

    // 1. Slash line grow
    tl.fromTo(
      lineRef.current,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 1, ease: "power2.out" }
    )
      .to(lineRef.current, {
        rotate: 15,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(slashWrap.current, {
        x: -40,
        duration: 0.6,
        ease: "power2.out",
      })

      // 2. Animate DEVELOPER letters
      .fromTo(
        devWord.current.querySelectorAll("[data-letter]"),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      )

      // 3. Reveal brackets
      .fromTo(
        leftAngle.current,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        rightAngle.current,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.4"
      )

      // 4. Slide entire block upward
      .to(container.current, {
        scale: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={container}
      className="fixed inset-0 flex items-center justify-center text-white text-4xl font-bold z-50"
    >
      {/* Background cover behind animation */}
      <div className="absolute inset-0 bg-black z-[-1]" />
      <div className="flex items-center gap-10 text-6xl md:text-7xl">
        {/* Left angle bracket */}
        <span ref={leftAngle} className="opacity-0 text-pink-400">
          &lt;
        </span>

        {/* Slash + Developer word */}
        <div ref={slashWrap} className="relative flex items-center gap-4">
          {/* Slash */}
          <div
            ref={lineRef}
            className="w-[12px] h-24 bg-gradient-to-t from-pink-500 to-purple-600 transform origin-bottom scale-y-0"
          ></div>

          {/* Typing DEVELOPER */}
          <span ref={devWord} className="flex ml-5">
            {"DEVELOPER".split("").map((char, i) => (
              <span
                key={i}
                className="inline-block opacity-0 translate-y-2"
                data-letter
              >
                {char}
              </span>
            ))}
          </span>
        </div>

        {/* Right angle bracket */}
        <span
          ref={rightAngle}
          className="opacity-0 text-purple-400 ml-[-70px]"
        >
          &gt;
        </span>
      </div>
    </div>
  );
};

export default DeveloperIntro;