import React from "react";
import Row from "./Row";
import img24 from "../assets/24.png";
import img25 from "../assets/25.png";
import img26 from "../assets/26.png";
import img27 from "../assets/27.png";
import img28 from "../assets/28.png";
import img29 from "../assets/29.png";
import img30 from "../assets/30.png";
import img31 from "../assets/31.png";
import img32 from "../assets/32.png";
import img33 from "../assets/33.png";
import img34 from "../assets/34.png";
import img35 from "../assets/35.png";
import img36 from "../assets/36.png";
import img37 from "../assets/37.png";
import img38 from "../assets/38.png";
import img39 from "../assets/39.png";
import img40 from "../assets/40.png";
import img41 from "../assets/41.png";
import img42 from "../assets/42.png";
import img43 from "../assets/43.png";

const Eight_page = () => {
 const imagedata = [
  { img: img24 },
  { img: img25 },
  { img: img26 },
  { img: img27 },
  { img: img28 },
  { img: img29 },
  { img: img30 },
  { img: img31 },
  { img: img32 },
  { img: img33 },
  { img: img34 },
  { img: img35 },
  { img: img36 },
  { img: img37 },
  { img: img38 },
  { img: img39 },
  { img: img40 },
  { img: img41 },
  { img: img42 },
  { img: img43 },
];

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const row1 = shuffleArray(imagedata);
  const row2 = shuffleArray(imagedata);
  const row3 = shuffleArray(imagedata);

  

  return (
    <div
      className="bg-white w-full h-screen px-5 sm:px-10 md:px-16 2xl:px-20 py-12 md:py-20 text-black overflow-hidden ">
      <h2 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-[text] tracking-tighter">
        DEVELOPER PARTNER
      </h2>
      {/* Rows */}
      <div className="w-full mt-10 md:mt-20 flex flex-col gap-8 md:gap-30 2xl:gap-30">
        <Row data={row1} animation="animate" />
        <Row data={row2} animation="animate2" />
        <Row data={row3} animation="animate" />
      </div>
    </div>
  );
};

export default Eight_page;