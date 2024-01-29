import React from 'react'
import './about.css'
import ME from '../../assets/proo.jpg'
import { LuAward } from "react-icons/lu";
import { PiUsersBold } from "react-icons/pi";
import { VscFolderLibrary } from "react-icons/vsc";




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          {/* <div className="about__me-image">
            <img src={ME} alt="me" className='about-image'/>
          </div> */}

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <LuAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <PiUsersBold className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolor error quaerat cum nihil cupiditate perferendis, animi ipsa rerum. Culpa voluptatem numquam pariatur nemo vel autem minima, similique neque molestias!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About