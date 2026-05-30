import React from "react";
import Row from "./Row";

const Eight_page = () => {
  const imagedata = [
    { img: "./src/assets/24.png" },
    { img: "./src/assets/25.png" },
    { img: "./src/assets/26.png" },
    { img: "./src/assets/27.png" },
    { img: "./src/assets/28.png" },
    { img: "./src/assets/29.png" },
    { img: "./src/assets/30.png" },
    { img: "./src/assets/31.png" },
    { img: "./src/assets/32.png" },
    { img: "./src/assets/33.png" },
    { img: "./src/assets/34.png" },
    { img: "./src/assets/35.png" },
    { img: "./src/assets/36.png" },
    { img: "./src/assets/37.png" },
    { img: "./src/assets/38.png" },
    { img: "./src/assets/39.png" },
    { img: "./src/assets/40.png" },
    { img: "./src/assets/41.png" },
    { img: "./src/assets/42.png" },
    { img: "./src/assets/43.png" },
  ];

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const row1 = shuffleArray(imagedata);
  const row2 = shuffleArray(imagedata);
  const row3 = shuffleArray(imagedata);

  

  return (
    <div
      className="
      bg-white
        w-full
        h-screen
        px-5 sm:px-10 md:px-16 2xl:px-20
        py-12 md:py-20
        text-black
        overflow-hidden
      "
    >
      {/* Heading */}
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