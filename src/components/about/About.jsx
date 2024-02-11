import React from "react";
import "./about.css";
import ME2 from "../../assets/prooo.jpg";
import { LuAward } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";
import CV from '../../assets/cv.pdf'
import { IoCloudDownloadOutline } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
       
          <div className="about__me-image">
            <img src={ME2} alt="" />
    
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <LuAward className="about__icon" />
              <h5>Experience</h5>
              <small>No Professional Experience Yet</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>
          <p>
            Skilled in building with React, Angular, and Node.js, as well as
            using languages like C++, JavaScript, and Python, I bring strong
            software development skills. I'm comfortable with databases like
            MongoDB and MySQL. I've successfully led projects, including
            creating an online store using the MEAN stack. I'm committed to solving
            problems accurately and enjoy collaborating with teams. My
            leadership abilities are dedicated to providing advanced and
            user-friendly solutions.
          </p>
          <div className="about__cv">
          <a href={CV} download className='btn btn-primary'><IoCloudDownloadOutline />My Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
