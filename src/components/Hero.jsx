import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers"; // Assuming corrected import
import BlurIn from "../../@/components/magicui/blur-in";
import Particles from "../../@/components/magicui/particles";
import BoxReveal from "../components/magicui/BoxReveal";
import { Link } from "react-router-dom";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScrollY, setMaxScrollY] = useState(0);

  // const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  // useEffect(() => {
  //   setColor(theme === "dark" ? "#ffffff" : "#000000");
  // }, [theme]);

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
    <section className="hero relative w-full h-screen mx-auto  bg-cover bg-no-repeat bg-center select-none">
      <Particles
        className="absolute inset-0 bg-[#1a112e]"
        quantity={1000}
        ease={80}
        // color={"#915EFF"}
        color={"#fff"}
        refresh
      />

      <div
        id="scroll-parent"
        className="absolute inset-0 mt-24 max-w-7xl mx-auto flex sm:flex-row flex-col items-start sm:gap-0 gap-5  "
      >
        <div className="sm:h-full sm:w-1/2 h-[40%]">
          <h1 className={`${styles.heroHeadText} text-white  mt-10`}>
            <span className="pl-10">Hi, I'm</span>
            <span className="text-[#915EFF] ">
              <BlurIn word={"Shah Sarmad Hamdani"}></BlurIn>
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100 pl-10`}>
            I craft engaging animations, dynamic user interfaces, and full-stack
            web applications.
          </p>
        </div>

        {/* scroll icon */}
        <div
          className=" sm:hidden  bg-transparent relative flex items-center justify-center border-2 border-gray-300 h-20 w-8 rounded-[15px] ml-[45vw]
        "
          onClick={() => {
            window.scrollBy({
              top: window.innerHeight/2,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="bg-purple-300 absolute  h-3 w-2 rounded-full "
          />
          <p className=" text-nowrap mt-24 text-purple-300 absolute">
            Scroll Down
          </p>
        </div>

        <div className="sm:w-1/2 h-[60%] w-full sm:h-full flex items-center justify-start sm:justify-center">
          <ComputersCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
