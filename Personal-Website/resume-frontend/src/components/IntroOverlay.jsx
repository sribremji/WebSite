// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// const IntroOverlay = () => {
//   const overlayRef = useRef();
//   const slashRef = useRef();
//   const textRef = useRef();
//   const [pinned, setPinned] = useState(true);

//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 0.5, onComplete: () => setPinned(false) });

//     tl.fromTo(
//       slashRef.current,
//       {
//         rotate: 0,
//         y: 0,
//         opacity: 0,
//         scaleY: 0.4,
//       },
//       {
//         opacity: 1,
//         scaleY: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       }
//     )
//       .to(slashRef.current, {
//         rotate: 15,
//         duration: 0.5,
//         ease: 'power2.out',
//       })
//       .fromTo(
//         textRef.current,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.6,
//           ease: 'power2.out',
//         },
//         '-=0.3'
//       )
//       .to(overlayRef.current, {
//         top: 0,
//         height: '6rem',
//         duration: 1,
//         ease: 'power2.inOut',
//         delay: 1,
//       });
//   }, []);

//   return (
//     <div
//       ref={overlayRef}
//       className={`fixed w-full z-[60] bg-gradient-to-b from-[#0f172a] to-black flex items-center justify-center transition-all duration-1000 ease-in-out ${
//         pinned ? 'h-screen top-0' : 'h-24 top-0 pointer-events-none backdrop-blur-md'
//       }`}
//     >
//       <div className="flex flex-col items-center text-center">
//         <div
//           ref={slashRef}
//           className="w-2 h-28 bg-gradient-to-b from-purple-500 to-red-500 transform origin-bottom"
//         />
//         <div ref={textRef} className="mt-4 text-pink-300 font-mono text-2xl font-bold">
//           &lt;developer&gt;
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroOverlay;