import React from "react";
import "./nav.css";
import { BiMessageDetail } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import {
  FaHouseUser,
  FaUserSecret,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHouseUser />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserSecret />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#qualification"
        onClick={() => setActiveNav("#qualification")}
        className={activeNav === "#qualification" ? "active" : ""}
      >
        <IoSchool />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FaProjectDiagram />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
