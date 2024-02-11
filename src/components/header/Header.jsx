import React from 'react'
import './header.css'
import { MdPhoneInTalk } from "react-icons/md";
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <div className="header__content">
          <h5> Hello I'm</h5>
          <h1>Proshanto Saha</h1>
          <h5>Fullstack Developer</h5>
          <p>Experienced software developer skilled in building web applications using React, Angular, and Node.js. Proficient in languages like C++, JavaScript, and Python. Known for solving problems with attention to detail and working collaboratively to create effective solutions.</p>
          <div className='header__icons'>
            <div className='cta'>
              <a href="#contact" className='btn btn-primary'><MdPhoneInTalk />Let's Talk</a>
            </div>
            <HeaderSocial />
          </div>
        </div>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
      
    </header>
  )
}

export default Header