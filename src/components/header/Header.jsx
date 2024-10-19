import React from "react";
import "./header.css";
import { MdPhoneInTalk } from "react-icons/md";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <section id="home">
      <header>
        <div className="container header__container">
          <div className="header__content">
            <h5> Hello I'm</h5>
            <h1>Proshanto Saha</h1>
            <h5>Fullstack Developer</h5>
            <p>
              Experienced Software Engineer specializing in NestJS, Angular, and
              React, with a passion for building scalable web applications and a
              strong foundation in competitive programming.
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
    </section>
  );
};

export default Header;
