import React, { useRef, useState } from "react";
import Counter from "./Counter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import imgmap from '../assets/map.png'
gsap.registerPlugin(ScrollTrigger);

const Seven_page = () => {
  const sectionRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",

      onEnter: () => {
        setStartCounter(true);

        // animation
        gsap.from(".fadeUp", {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      },

      once: true,
    });
  });

  return (
    <div
      ref={sectionRef}
      className=" min-h-screen w-full relative overflow-hidden px-5 sm:px-8 md:px-12 lg:px-20 py-14 md:py-20 text-white bg-black
      "
    >
      {/* heading */}
      <h2
        className=" fadeUp text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[text] tracking-tighter leading-tight">
        OUR PRESENCE <br />
        AND OUR INTERNATIONAL REACH :
      </h2>
      <div className="py-10 md:py-15 px-0 md:px-10 w-full flex items-center justify-center">
        <div className=" fadeUp p-5 md:p-8 rounded-[30px] bg-white/10 backdrop-blur-3xl border-[#6B6538] border md:border-2 w-full max-w-6xl">
          <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl font-[impact] text-center leading-relaxed">
            UAE - ISRAEL - SAUDI ARABIA - INDIA -
            <br className="hidden md:block" />
            PAKISTAN - EGYPT - TANZANIA - UK - RUSSIA
          </h3>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 mt-5">
        <div className=" fadeUp w-full lg:w-[40%] overflow-hidden rounded-[30px]">
          <img src={imgmap} className="w-full h-full object-cover hover:scale-105 transition-all duration-700" alt="" />
        </div>
        <div className=" fadeUp flex items-center justify-center flex-col text-center lg:w-[50%]">
          <Counter start={startCounter} />
          <p className=" text-base sm:text-lg md:text-xl lg:text-2xl mt-6 md:mt-10 max-w-2xl leading-relaxed text-gray-300 ">
            OVER AED 250M+ IN PROPERTY TRANSACTIONS
            <br />
            SERVING CLIENTS ACROSS UAE, UK,
            PAKISTAN, INDIA, TANZANIA & GCC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seven_page;