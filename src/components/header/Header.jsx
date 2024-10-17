import React from "react";
import "./header.css";
import { MdPhoneInTalk } from "react-icons/md";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <h5> Hello I'm</h5>
          <h1>Proshanto Saha</h1>
          <h5>Fullstack Developer</h5>
          <p>
            Experienced Software Engineer with expertise in NestJs, Angular, and
            React, specializing in building scalable, high-performance web
            applications. Completed a 3-month Software Engineer Internship,
            gaining hands-on experience in designing and implementing robust
            server-side solutions. Passionate about competitive programming,
            with strong problem-solving abilities and a solid foundation in
            algorithms and data structures.
          </p>
          <div className="header__contact">
            <a href="#contact" className="btn btn-primary">
              <MdPhoneInTalk />
              Let's Talk
            </a>
          </div>
          <div className="header__icons">
            <HeaderSocial />
          </div>
        </div>

        <div className="header__image">
          <img src={ME} alt="my_image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
