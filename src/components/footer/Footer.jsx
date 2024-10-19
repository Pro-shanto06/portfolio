import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import {
  FaHouseUser,
  FaUserSecret,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";

const Footer = () => {
  const navLinks = [
    { icon: <FaHouseUser />, label: "Profile", href: "#home" },
    { icon: <FaUserSecret />, label: "About", href: "#about" },
    { icon: <FaLaptopCode />, label: "Skills", href: "#skill" },
    { icon: <IoSchool />, label: "Qualifications", href: "#qualification" },
    { icon: <FaProjectDiagram />, label: "Projects", href: "#project" },
    { icon: <BiMessageDetail />, label: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    { icon: <FaXTwitter />, href: "https://x.com/Pro_shantoSaha" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/pro.shan.to/" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/Pacific000/" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/proshantosaha06",
    },
  ];

  return (
    <footer id="footer">
      <div className="container footer__container">
        <h2 className="footer__title">Proshanto Saha</h2>
        <ul className="footer__list">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.icon}
              <a href={link.href} className="footer__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="footer__copy">
          <p>&#169; Proshanto Saha. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
