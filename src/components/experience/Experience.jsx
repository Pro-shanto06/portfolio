import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          
          <div className="experience__content">

            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            </div>

            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            </div>

            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            </div>

            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            </div>
            </article>

            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>Angular</h4>
            </div>
            </article>

          </div>
        </div>


        <div className="experience__backend">

        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>Node JS</h4>
          
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
           
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            <h4>PHP</h4>
      
            </div>
            </article>
            <article className='experience__details'>
            <BsFillPatchCheckFill  className='experience__details-icon'/>
            <div>
            
            <h4>Express JS</h4>
            </div>
            </article>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Experience