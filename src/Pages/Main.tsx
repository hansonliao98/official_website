import React, { useEffect, useState } from "react";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Partfolio from "../Components/Portfolio/Partfolio";
import Design from "../Components/Design/Design";
import Contact from "../Components/Contact/Contact";
import BannerIntro from "../Components/BannerIntro/BannerIntro";

const Main = ({ loadVideoHandler }) => {
  return (
    <div className="bg-image2 bg-cover -mt-1 scroll-smooth">
      {/* <BannerIntro /> */}
      <About />
      <Skills />
      <Partfolio loadVideoHandler={loadVideoHandler} />
      <Design />
      <Contact />
    </div>
  );
};

export default Main;
