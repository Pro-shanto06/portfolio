import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#qualification'>Qualifications</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
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