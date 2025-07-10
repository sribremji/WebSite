import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ICanDo = () => {
  const sectionRef = useRef();
  const frontCardRef = useRef();
  const backCardRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=50%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(frontCardRef.current, {
        rotateX: 90,
        opacity: 0,
        duration: 1,
        transformOrigin: "center center",
        ease: "power2.inOut",
      }).fromTo(
        backCardRef.current,
        { rotateX: -90, opacity: 0 },
        {
          rotateX: 0,
          opacity: 1,
          duration: 1,
          transformOrigin: "center center",
          ease: "power2.inOut",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const card = containerRef.current;
    const onMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;
      card.style.transform = `rotateX(${y * -1}deg) rotateY(${x}deg)`;
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-transparent text-white px-6"
    >
      <div
        ref={containerRef}
        className="relative w-[600px] h-[320px]"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* Front card */}
        <div
          ref={frontCardRef}
          className="absolute w-full h-full bg-white text-black rounded-none p-6 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 0 60px 20px rgba(255, 0, 234, 0.73)",
          }}
        >
          <h2 className="text-4xl font-bold mb-2">Front end</h2>
          <p className="text-2xl text-center text-lg px-10">
            I assist designers and agencies in transforming ideas into elegant CMS and eCommerce interfaces using Figma, VS Code, and coffee.
          </p>
        </div>

        {/* Back card */}
        <div
          ref={backCardRef}
          className="absolute w-full h-full bg-gray-900 text-white rounded-none p-6 flex flex-col items-center justify-center opacity-0"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            boxShadow: "0 0 60px 20px rgba(143, 41, 233, 0.45)",
          }}
        >
          <h2 className="text-4xl font-bold mb-2">Back end</h2>
          <p className="text-2xl text-center text-lg px-10">
            I build scalable backend systems using Java, Spring Boot, AWS, and automate CI/CD using Jenkins and Terraform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ICanDo;