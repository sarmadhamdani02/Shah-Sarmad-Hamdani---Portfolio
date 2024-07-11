import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 fixed z-20 bg-primary`}>
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
          <p className="text-white text-[18px] font-bold cursor-pointer">Shah Sarmad Hamdani</p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`font-medium ${active === link.title ? "text-[#14affb] font-bold" : "text-secondary"} hover:text-[#14affb] text-[18px]  cursor-pointer transition`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
