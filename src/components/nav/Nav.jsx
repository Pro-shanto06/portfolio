import React, { useState, useEffect } from "react";
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
    { href: "#", icon: <FaHouseUser />, id: "home" },
    { href: "#about", icon: <FaUserSecret />, id: "about" },
    { href: "#skill", icon: <FaLaptopCode />, id: "skills" },
    { href: "#qualification", icon: <IoSchool />, id: "qualification" },
    { href: "#project", icon: <FaProjectDiagram />, id: "project" },
    { href: "#contact", icon: <BiMessageDetail />, id: "contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = `#${entry.target.id}`;
            setActiveNav(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
