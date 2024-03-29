import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { PiUserCircleGearBold } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";

const Footer = () => {
  return (
    <footer id='footer'>

      <div className="container footer__container">
        <h2 className="footer__title">Proshanto Saha</h2>
        <ul className='footer__list'>
          <li><IoHomeOutline /><a href='#' className='footer__link'>Home</a></li>
          <li><FiUser /><a href='#about' className='footer__link'>About</a></li>
          <li><IoSchool /><a href='#qualification' className='footer__link'>Qualifications</a></li>
          <li><PiUserCircleGearBold /><a href='#experience' className='footer__link'>Skills</a></li>
          <li><FaProjectDiagram /><a href='#portfolio' className='footer__link'>Portfolio</a></li>
          <li><BiMessageDetail /><a href='#contact' className='footer__link'>Contact</a></li>

        </ul>
        <div className="footer__social">
          <a href="https://x.com/Pro_shantoSaha" target="_blank" className="footer__social-link"><FaTwitter />
          </a>
          <a href="https://www.instagram.com/pro.shan.to/" target="_blank" className="footer__social-link"><FaInstagram />
          </a>
          <a href="https://www.facebook.com/Pacific000/" target="_blank" className="footer__social-link"><FaFacebook />
          </a>
        </div>

        <div className="footer__copy">
        <p>&#169; Proshanto Saha. All rights reserved</p>
      </div>
      </div>
      
    
    </footer>
  )
}

export default Footer