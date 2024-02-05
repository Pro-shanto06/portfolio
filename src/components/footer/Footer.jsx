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
      <ul className='permalinks'>
        <li><IoHomeOutline /><a href='#'>Home</a></li>
        <li><FiUser /><a href='#about'>About</a></li>
        <li><IoSchool /><a href='#qualification'>Qualifications</a></li>
        <li><PiUserCircleGearBold /><a href='#experience'>Skills</a></li>
        <li><FaProjectDiagram /><a href='#portfolio'>Portfolio</a></li>
        <li><BiMessageDetail /><a href='#contact'>Contact</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href="https://x.com/Pro_shantoSaha" target="_blank" ><FaTwitter />
</a>
        <a href="https://www.instagram.com/pro.shan.to/" target="_blank" ><FaInstagram />
</a>
        <a href="https://www.facebook.com/Pacific000/" target="_blank"><FaFacebook />
</a>

      </div>
      
    </footer>
  )
}

export default Footer