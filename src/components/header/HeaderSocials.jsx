import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/proshantosaha06/" target="_blank" className='social__icon'><FaLinkedin/></a>
        <a href="https://github.com/Pro-shanto06" target="_blank" className='social__icon'><FaGithubSquare/></a>
        <a href="https://www.facebook.com/Pacific000/" target="_blank" className='social__icon'><FaFacebookSquare/></a>
        {/* <a href="https://x.com/Pro_shantoSaha" target="_blank" className='social__icon'><FaSquareXTwitter /></a> */}
        <a href="https://leetcode.com/u/pro_shanto" target="_blank" className='social__icon'><SiLeetcode /></a>
        <a href="https://codeforces.com/profile/Pro.shanto" target="_blank" className='social__icon'><SiCodeforces /></a>
    </div>
  );
}

export default HeaderSocials;
