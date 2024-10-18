import React from "react";
import "./about.css";
import ME2 from "../../assets/prooo.jpg";
import { LuAward } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";
import CV from "../../assets/cv.pdf";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

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
              <small>3-month Software Engineer Internship</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>

          <p>
            As an experienced Software Engineer, I specialize in building
            scalable, high-performance web applications using NestJS, Angular,
            and React. I completed a 3-month Software Engineer Internship,
            gaining hands-on experience in designing and implementing robust
            server-side solutions. I possess strong problem-solving abilities,
            backed by a solid foundation in algorithms and data structures, and
            am skilled in languages such as C++, JavaScript, and Python. I have
            experience with databases like MongoDB and MySQL. I am dedicated to
            providing advanced, user-friendly solutions and thrive in
            collaborative team environments.
          </p>
          <div className="about__cv">
            <a href={CV} download className="btn btn-primary">
              <IoCloudDownloadOutline />
              Download My Resume
            </a>
            <a
              href="https://flowcv.com/resume/irfavn0sh8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <IoEyeOutline />
              View My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
