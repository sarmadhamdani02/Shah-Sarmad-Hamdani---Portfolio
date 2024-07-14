import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import { BorderBeam } from "../../@/components/magicui/border-beam"; // Ensure correct import path
import OrbitingCircles from "./magicui/orbiting-circles";
import { Linkedin, Mail, Github, Phone } from "lucide-react";

// const ServiceCard = ({ index, title, icon }) => (

// );

const ContactMe = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-transparent bg-clip-text text-center text-8xl font-semibold leading-none dark:from-white dark:to-black text-stroke-purple opacity-50">
        Contact me.
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.linkedin />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.gmail />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
    },
    (err) => {
      alert("Something went wrong, please try later.");
    }
  );
};

const Icons = {
  gitHub: () => (
    <button
      onClick={() => {
        copyToClipboard("https://github.com/sarmadhamdani02");
        alert("Github Link copied Successfully");
      }}
    >
      <Github />
    </button>
  ),
  linkedin: () => (
    <button
      onClick={() => {
        copyToClipboard("https://www.linkedin.com/in/shah-sarmad-hamdani/");
        alert("LinkedIn Link copied Successfully");
      }}
    >
      <Linkedin color="#0965c2" />
    </button>
  ),
  gmail: () => (
    <button
      onClick={() => {
        copyToClipboard("sarmadfarooqhamdani.com");
        alert("Email copied Successfully");
      }}
    >
      <Mail color="#e94437" />
    </button>
  ),
  whatsapp: () => (
    <button
      onClick={() => {
        copyToClipboard("+923165182933");
        alert("WhatsApp number copied Successfully");
      }}
    >
      <Phone color="#2ed14b" />
    </button>
  ),
};

export default SectionWrapper(ContactMe, "ContactMe");
