import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import First_Page from "./Seaction/First_Page";
import Seacond_page from "./Seaction/Seacond-Page";
import Third_page from "./Seaction/Third_page";
import Four_page from "./Seaction/Four_page";
import Five_page from "./Seaction/Five_page";
import Six_page from "./Seaction/Six_page";
import Seven_page from "./Seaction/Seven_page";
import Eight_page from "./Seaction/Eight_page";
import Nine_page from "./Seaction/Nine_page";
import Loader from "./Seaction/Loder";


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