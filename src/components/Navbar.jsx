import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 fixed z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="h-9 w-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
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

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl p-4`}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
