import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'
import { useRef } from 'react';
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";
import img18 from "../assets/18.png";
import img19 from "../assets/19.png";
import img20 from "../assets/20.png";
import img21 from "../assets/21.png";

const Six_page = () => {

  const container = useRef(null)
  const Boxref = useRef(null)

const servicesData = [
  {
    img: img11,
    heading: "RESIDENTIAL SALES AND LEASING",
    text: "Discover your dream home with us.",
  },
  {
    img: img12,
    heading: "LAND ACQUISITION & COMMERCIAL SALES",
    text: "Strategic land and commercial investment opportunities.",
  },
  {
    img: img13,
    heading: "COMMERCIAL SALES AND LEASING",
    text: "Find the perfect space for your business.",
  },
  {
    img: img14,
    heading: "INVESTMENT ADVISORY",
    text: "Expert guidance for smart investments.",
  },
  {
    img: img16,
    heading: "RELOCATION ASSISTANCE",
    text: "Helping you settle into your new home.",
  },
  {
    img: img17,
    heading: "LEGAL GUIDANCE",
    text: "Expert advice for your property transactions.",
  },
  {
    img: img18,
    heading: "INTERIOR DESIGN",
    text: "Transforming spaces into your dream home.",
  },
  {
    img: img19,
    heading: "PROPERTY MANAGEMENT",
    text: "We ensure your investments are well taken care of.",
  },
  {
    img: img20,
    heading: "MARKET ANALYSIS",
    text: "Insights to guide your investment decisions.",
  },
  {
    img: img21,
    heading: "MORTGAGE ASSISTANCE",
    text: "Navigating financing for your property.",
  },
];

 useGSAP(() => {
  const mm = gsap.matchMedia();

  // desktop animation
  const cards = gsap.utils.toArray(".info");
  mm.add("(min-width: 768px)", () => {

    gsap.to(cards, {
      xPercent: -730,
      ease: "none",
      scrollTrigger: {
        trigger: Boxref.current,
        scroller: "body",
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
      },
    });
  });

  // mobile animation
  mm.add("(max-width: 767px)", () => {
   gsap.to(cards, {
      xPercent: -1010,
      ease: "none",
      scrollTrigger: {
        trigger: Boxref.current,
        scroller: "body",
        start: "top top",
        end: "top -200%",
        scrub: 1,
        pin: true,
      },
    });
  });

  return () => mm.revert();
});



  return (
    <div ref={Boxref} className='text-white min-h-screen w-full relative overflow-hidden  flex flex-col bg-[#111111]' >
      <div className="px-5 py-10 sm:px-8 md:px-12 2xl:p-20">

        <h3 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-[text] tracking-tighter leading-tight">
          OUR SERVICES
        </h3>

        <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl mt-6 md:mt-10 max-w-2xl leading-relaxed text-gray-300">
          “Foreign Brothers Real Estate Brokers L.L.C. delivers
          comprehensive real estate solutions across
          residential, commercial, investment, and property
          management sectors. With deep market expertise
          and a client-focused approach, we provide
          transparent, seamless, and results-driven real
          estate services tailored to every client’s needs.”
        </p>

      </div>
      <div className='h-full w-full overflow-hidden'>
        <div ref={container} className='w-fit hello py-5 h-full mb-10 px-10 flex gap-10 overflow-hidden'>
          {servicesData.map((elem, idx) => {
            return <div key={idx} className="info flex rounded-2xl  items-center shrink-0 justify-center flex-col h-110 w-85 overflow-hidden">
              <div>
                <img src={elem.img} className='bg-cover h-full w-full' alt="" />
              </div>
              <div className='flex flex-col h-80 w-full  bg-black px-4 py-6 gap-5'>
                <h1 className='font-[impact] text-2xl border-b py-2'>{elem.heading}</h1>
                <p className='font-extralight text-xl'>{elem.text}</p>
              </div>
            </div>
          })}
        </div>
      </div>

    </div >
  )
}

export default Six_page
