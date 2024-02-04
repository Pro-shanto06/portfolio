import React from 'react'
import './about.css'
import ME2 from '../../assets/prooo.jpg'
import CV from '../../assets/cv.pdf'
import { LuAward } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";





const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          
          <div className="about__me-image">
            <img src={ME2} alt="About image" />
          </div>

        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <LuAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No Professional Experience Yet</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
            <article className='about__card'>
              <BiSupport  className='about__icon'/>
              <h5>Support</h5>
              <small>24/7</small>
            </article>
          </div>
          <p>Demonstrating expertise in React, Angular, Node.js, and languages such as C++, JavaScript, and Python, I contribute robust software development skills. Proficient in MongoDB and MySQL, I've led impactful projects, including an MEAN stack e-commerce platform and an Angular-based Game of Thrones quotes application. My commitment to precise problem-solving, coupled with adept team collaboration and leadership abilities, underscores my dedication to delivering sophisticated and user-centric solutions.</p>

        <div className="cv">
        <a href={CV} download className='btn btn-primary'>Download CV</a>
        </div>

        </div>
      </div>
    </section>
  )
}

export default About