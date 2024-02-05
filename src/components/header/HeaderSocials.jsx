import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/proshantosaha06/" target="_blank" className='social__icon'><FaLinkedin/></a>
        <a href="https://github.com/Pro-shanto06" target="_blank" className='social__icon'><FaGithubSquare/></a>
        <a href="https://www.facebook.com/Pacific000/" target="_blank" className='social__icon'><FaFacebookSquare/></a>
        <a href="https://x.com/Pro_shantoSaha" target="_blank" className='social__icon'><FaSquareXTwitter/></a>
    </div>
  )
}

export default HeaderSocials