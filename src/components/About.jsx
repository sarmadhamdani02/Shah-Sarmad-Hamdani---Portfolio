import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { BorderBeam } from "../../@/components/magicui/border-beam"; // Ensure correct import path
import ShineBorder from "./magicui/shine-border";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-[250px]">
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <ShineBorder
        className="relative h-[280px] w-full rounded-[20px] bg-purple-950  py-5 px-12 flex justify-evenly items-center flex-col "
        color={"#915EFF"}
      >
        <BorderBeam />
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </ShineBorder>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* <div className="relative h-[200px] w-[200px] rounded-xl">
        <BorderBeam />
      </div> */}

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer fluent in{" "}
        <span className="text-purple-500 font-bold">TypeScript</span> and{" "}
        <span className="text-purple-500 font-bold">JavaScript</span>,
        specializing in frameworks like{" "}
        <span className="text-purple-500 font-bold">React</span>,{" "}
        <span className="text-purple-500 font-bold">Node.js</span>, and{" "}
        <span className="text-purple-500 font-bold">Three.js</span> for both{" "}
        <span className="text-green-500 font-bold">frontend</span> and{" "}
        <span className="text-green-500 font-bold">backend</span> development. I
        enjoy creating efficient, scalable, and user-friendly solutions by
        closely collaborating with clients. Let's work together to bring your
        ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 sm:gap-20 items-center ml-[10vw] sm:ml-0 sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
