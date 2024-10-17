import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio.png';
import IMG2 from '../../assets/home.png';
import IMG3 from '../../assets/engrhire.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio" />
          </div>
          <h3>My Responsive Portfolio</h3>
          <p>This is a fully responsive portfolio website built with React, showcasing my skills, projects, and experience. It features smooth scrolling, animated components, and a modern design to highlight my work in a visually appealing way.</p>
          <div className="portfolio__item-cta">
            <a href='https://github.com/Pro-shanto06/portfolio' className='btn' target='_blank'>Github</a>
            <a href='https://proshanto.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Angular Ecommerce" />
          </div>
          <h3>Angular Ecommerce</h3>
          <p>An e-commerce platform developed using Angular, designed to provide a smooth shopping experience. The project includes product listing, a shopping cart feature, and responsive design for various devices.</p>
          <div className="portfolio__item-cta">
            <a href='https://github.com/Pro-shanto06/1st-angular-app' className='btn' target='_blank'>Github</a>
            <a href='https://1st-angular-app.netlify.app' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Freelancing Platform" />
          </div>
          <h3>Freelancing Platform</h3>
          <h4>A freelancing platform built to connect clients with engineers for various projects. The platform is user-friendly and includes functionalities like job posting, bidding, and user profiles, offering a marketplace for engineering services.</h4>
          <div className="portfolio__item-cta">
            <a href='https://github.com/Pro-shanto06/EngrHire' className='btn' target='_blank'>Github</a>
            <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
