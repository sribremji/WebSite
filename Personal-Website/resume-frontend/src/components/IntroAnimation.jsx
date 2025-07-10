import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IntroAnimation = ({ onComplete }) => {
  const containerRef = useRef();
  const slashRef = useRef();
  const tagRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // After animation finishes, let App render the rest
        onComplete();
      },
    });

    tl.fromTo(
      slashRef.current,
      { scaleY: 0, rotate: 0, transformOrigin: 'center' },
      { scaleY: 1, rotate: 20, duration: 0.5, ease: 'power2.out' }
    )
      .fromTo(
        tagRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.3'
      )
      .to(containerRef.current, {
        x: -60,
        duration: 0.6,
        ease: 'power2.out',
      })
      .fromTo(
        textRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6 },
        '-=0.4'
      );
  }, [onComplete]);

  return (
    <div className="fixed top-10 left-10 z-50 flex items-center font-mono text-2xl text-white">
      <div ref={containerRef} className="flex items-center gap-2">
        <div
          ref={slashRef}
          className="w-[2px] h-10 bg-yellow-400"
        />
        <span ref={tagRef} className="text-yellow-400 text-lg">{`< >`}</span>
      </div>
      <span ref={textRef} className="ml-4 text-yellow-400 font-bold">developer</span>
    </div>
  );
};

export default IntroAnimation;