import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <div className="header__content">
        <h5> Hello I'm</h5>
        <h1>Proshanto Saha</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <p>Software developer adept in React, Angular, and Node.js, with expertise in C++, JavaScript, and Python, delivering impactful solutions through meticulous problem-solving and collaborative leadership.</p>
        <CTA/>
        <HeaderSocial />
        </div>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        
        
      </div>
    </header>
  )
}

export default Header