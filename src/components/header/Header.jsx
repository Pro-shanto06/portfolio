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
          <p>Software developer skilled in building web applications using React, Angular, and Node.js. Proficient in languages like C++, JavaScript, and Python. Known for solving problems with attention to detail.</p>
          <div className='header__contact'>
            <a href="#contact" className='btn btn-primary'><MdPhoneInTalk />Let's Talk</a>
          </div>
          <div className='header__icons'>
            <HeaderSocial />
          </div>
        </div>

        <div className="header__image">
          <img src={ME} alt="my_image" />
        </div>

      </div>

    </header>
  )
}

export default Header