import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/home.png'
import IMG3 from '../../assets/engrhire.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          </div>
            <h3>MY responsive portfolio</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Pro-shanto06/portfolio' className='btn' target='_blank'>Github</a>
            <a href='https://proshanto.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Angular Ecommerce</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Pro-shanto06/1st-angular-app' className='btn' target='_blank'>Github</a>
            <a href='https://1st-angular-app.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Freelancing Platform</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/Pro-shanto06/EngrHire' className='btn' target='_blank'>Github</a>
            <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio