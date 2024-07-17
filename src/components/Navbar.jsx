import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { motion } from 'framer-motion';
// import { BorderBeam } from "../../@/components/magicui/border-beam"; // 
import ShineBorder from "./magicui/shine-border";



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [navbar, setNavbar] = useState(false);
  
  window.addEventListener("scroll", () => window.scrollY >= 100 ? setNavbar(true) : setNavbar(false));

  const heightVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`${styles.paddingX} flex items-center py-5 top-0 fixed z-20 bg-primary w-screen`}
      
    >

      <div className={`w-full flex justify-between items-center max-w-7xl mx-auto py-2 px-6 rounded-full ${navbar ? "backdrop-filter backdrop-blur-sm bg-[#23163f7b] transitoin border border-[#915eff2f]" : ""}`}>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="h-9 w-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer ml-2">
            Shah Sarmad Hamdani
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-[#8d61f2] font-bold"
                  : "text-secondary"
              } hover:text-[#8d61f2] text-[18px]  cursor-pointer transition text-poppins font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* <div className="change-theme hidden sm:flex">
          <button className=" border border-gray-500 px-2 py-2 hover:bg-[#915EFF] hover:text-[#1D1836] transition rounded-full">
            Change Theme
          </button>
        </div> */}

        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" w-[28px] h-[28px] origin-contain cursor-pointer transition"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
          variants={heightVariants}
          style={{ overflow: "hidden" }}
          className={`backdrop-filter backdrop-blur-lg bg-[#3723616c] transition border border-[#915eff2f] absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl p-4`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-medium ${
                  active === link.title
                    ? "text-[#8d61f2] font-bold"
                    : "text-secondary"
                } hover:text-[#8d61f2] font-poppins text-[16px]  cursor-pointer transition`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
