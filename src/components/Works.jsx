import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { NeonGradientCard } from "../../@/components/magicui/neon-gradient-card";
import Meteors from "../components/magicui/meteors";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Meteors number={30} />
      <NeonGradientCard className="max-w-sm items-center justify-center text-center ">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
          id="Work"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl "
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 max-w-sm items-center justify-center text-center">
            <h3 className="mt-5 pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#9962ff] from-35% to-[#00FFF1] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </NeonGradientCard>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-space-mono"
        >
          The following projects highlight my{" "}
          <span class="text-green-500 font-bold">skills</span> and{" "}
          <span class="text-green-500 font-bold">experience</span> through real-world
          examples of my work. Each project is accompanied by a brief
          description, along with links to code repositories and live demos font-bold.
          These examples showcase my ability to{" "}
          <span class="text-purple-500 font-bold">solve complex problems</span>,
          work with{" "}
          <span class="text-purple-500 font-bold">various technologies</span>,
          and{" "}
          <span class="text-purple-500 font-bold">
            manage projects effectively
          </span>
          .
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
