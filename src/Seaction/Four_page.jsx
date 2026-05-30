import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import img54 from "../assets/54.png";
import img2 from "../assets/2.png";

const Four_page = () => {

  const Textref = useRef(null)
  const container = useRef(null)

  useGSAP(() => {

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scroller: "body",
        start: "top top",
      }
    })

    tl.from(Textref.current, {
      y: 100,
      opacity: 0,
      duration: 1
    })
    
    tl.from(".card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger:0.3
    },"-=1.2")
  });

  const data = [
    {
      img: icon1,
      heding: "VISION",
      dis: `To become a trusted real
              estate advisory firm
              connecting investors with highvalue
              opportunities across Dubai
              and international markets.`
    },
    {
      img: icon2,
      heding: "MISSION",
      dis: `To deliver strategic, transparent,
            and results-driven real estate
            solutions through market expertise
            and long-term partnerships.`
    },
    {
      img: icon3,
      heding: "VALUES",
      dis: `We prioritize integrity, transparency,
            and dedication, believing that these
            core values are essential in building
            trust and lasting relationships within
            the real estate community.`
    }
  ]


  return (
   <div
  ref={container}
  className="min-h-screen w-full relative overflow-hidden flex items-center justify-center text-white"
>
  <img
    src={img54}
    className="object-cover bg-cover h-full w-full absolute -z-10 top-0 left-0 brightness-20"
    alt=""
  />

  <img
    src={img2}
    className="absolute -top-100 opacity-40 left-0 brightness-20"
    alt=""
  />

  <div className="w-full h-full flex 2xl:p-40 py-15 px-5 flex-col">
    
    {/* heading */}
    <div>
      <h1
        ref={Textref}
        className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-tight font-[text] tracking-tighter"
      >
        Our Vision & Mission <br />
        Guiding You Home :
      </h1>
    </div>

    <div className="flex gap-5 2xl:flex-row flex-col items-center justify-around py-40 h-full w-full">
      {data.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="card h-110 2xl:w-1/5 w-full hover:scale-110 transition-all text-center bg-transparent backdrop-blur-xl gap-4 rounded-4xl border border-[#6B6538] shadow-2xsxl shadow-[#6B6538] flex items-center justify-center flex-col"
          >
            <img src={elem.img} className="scale-120" alt="" />

            {/* card heading */}
            <h4 className="font-[impact] text-3xl sm:text-4xl 2xl:text-5xl tracking-tighter">
              {elem.heding}
            </h4>

            {/* paragraph */}
            <p className="text-base sm:text-lg 2xl:text-xl px-5 leading-relaxed font-sans">
              {elem.dis}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</div>
  )
}

export default Four_page
