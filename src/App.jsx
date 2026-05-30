import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import First_Page from "./seaction1/First_Page";
import Seacond_page from "./seaction1/Seacond-Page";
import Third_page from "./seaction1/third_page";
import Four_page from "./seaction1/Four_page";
import Five_page from "./seaction1/Five_page";
import Six_page from "./seaction1/Six_page";
import Loader from "./seaction1/Loder";
import Seven_page from "./seaction1/Seven_page";
import Eight_page from "./seaction1/Eight_page";
import Nine_page from "./seaction1/Nine_page";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <main data-scroll-container ref={scrollRef} className="overflow-hidden">
      <Loader/>
      <First_Page/>
      <Seacond_page/>
      <Third_page/>
      <Four_page/>
      <Five_page/>
      <Six_page/>
      <Seven_page/>
      <Eight_page/>
      <Nine_page/>
    </main>
  );
};

export default App;