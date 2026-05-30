import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const Five_page = () => {
  const container = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const data = [
    {
      heading: "EXPERTISE",
      text: "Our team brings years of industry knowledge to guide your real estate journey.",
    },
    {
      heading: "INTEGRITY",
      text: "We prioritize transparency and honesty in every transaction we handle.",
    },
    {
      heading: "RESULTS",
      text: "Our proven track record ensures you achieve your real estate goals efficiently.",
    },
    {
      heading: "NETWORK",
      text: "Benefit from our extensive connections in the real estate market for better opportunities.",
    },
    {
      heading: "SERVICE",
      text: "We offer personalized attention to meet every client’s unique needs and preferences.",
    },
    {
      heading: "INNOVATION",
      text: "Our approach incorporates the latest technology to enhance your buying or selling experience.",
    },
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".cards", {
        opacity: 0,
        y: isMobile ? 50 : 150,
        scale: isMobile ? 1 : 0.7,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // heading animation
      tl.from(
        ".mainHeading",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          ease: "power3.out",
          duration: 1,
        },
        "same"
      );

      // cards animation
      tl.to(
        ".cards",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          ease: "power3.out",
          duration: 1,
        },
        "same"
      );
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={container}
      className="min-h-screen w-full relative overflow-hidden bg-[#0b0b0b] py-20 px-5 md:px-10 2xl:px-20"
    >
      {/* Background Glow */}
      <div className="absolute h-80 w-80 md:h-125 md:w-125 bg-yellow-500/10 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2" />

      {/* Heading */}
      <div className="w-full flex items-center justify-center mb-16 md:mb-24">
        <h2 className="mainHeading text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl text-center font-[text] tracking-tighter text-white leading-tight">
          Why Choose Us ?
        </h2>
      </div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          2xl:gap-10
          place-items-center
          relative
          z-10
        "
      >
        {data.map((elem, idx) => {
          return (
            <div
              key={idx}
              className=" cards relative w-full max-w-95 min-h-80 md:min-h-87.5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] text-center text-white flex items-center justify-center flex-col gap-5 p-6 md:p-8 overflow-hidden hover:scale-105 hover:border-yellow-500/40 transition-all duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
              "
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500/10 to-transparent opacity-50" />

              <h4 className="font-black text-3xl md:text-4xl tracking-tight z-10">
                {elem.heading}
              </h4>

              <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-300 z-10">
                {elem.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Five_page;