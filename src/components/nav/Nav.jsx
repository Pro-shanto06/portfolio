import React, { useState } from "react";
import "./nav.css";
import { BiMessageDetail } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import {
  FaHouseUser,
  FaUserSecret,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const navLinks = [
    { href: "#", icon: <FaHouseUser /> },
    { href: "#about", icon: <FaUserSecret /> },
    { href: "#skill", icon: <FaLaptopCode /> },
    { href: "#qualification", icon: <IoSchool /> },
    { href: "#portfolio", icon: <FaProjectDiagram /> },
    { href: "#contact", icon: <BiMessageDetail /> },
  ];

  return (
    <nav>
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onClick={() => setActiveNav(link.href)}
          className={activeNav === link.href ? "active" : ""}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
