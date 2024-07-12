import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >

        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className=" bg-[#081e4d] rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col  justify-evenly items-center flx-col"
        >

          <img src={icon} alt={title} className=" w-16 h-16 object-contain" />
          <h3 className=" font-bold text-white text-center text-[20px]">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#6a6e7b] text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        minima nobis laudantium aliquid asperiores, qui ut sint suscipit tempore
        amet iste iure delectus architecto nihil minus, aperiam voluptatem
        exercitationem, beatae commodi est veniam nisi dolore?
      </motion.p>

      <div className=" flex flex-wrap mt-20 gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </> 
  );
};

export default About;
