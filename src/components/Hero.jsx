import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers"; // Assuming corrected import

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScrollY, setMaxScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const parentHeight = document.querySelector("#scroll-parent").offsetHeight;
    setMaxScrollY(parentHeight - 200); // Adjust for any padding or margin
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto bg-[url('public/hero_bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="h-full  w-full absolute inset-0 bg-[#11111170]" />
      <div id="scroll-parent" className="absolute inset-0 mt-24 max-w-7xl mx-auto flex sm:flex-row flex-col items-start gap-5  ">
        <div className="sm:h-full sm:w-1/2 h-[40%]">
          <h1 className={`${styles.heroHeadText} text-white pl-10 mt-10`}>
            Hi, I'm <br />
            <span className="text-[#915EFF] ">
              Shah
              <span> Sarmad</span>
              <br />
              <span className="ml-10">Hamdani</span>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 pl-10`}>
            I craft engaging animations, dynamic user interfaces, and full-stack web applications.
          </p>
        </div>

        <div className="sm:w-1/2 h-[60%] w-full sm:h-full flex items-center justify-start sm:justify-center">
          <ComputersCanvas />
        </div>
      </div>

      {/* Optionally, add your animated link to scroll down */}
    </section>
  );
};

export default Hero;
