import React from "react";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/proshantosaha06/",
    icon: <FaLinkedin />,
  },
  {
    platform: "GitHub",
    url: "https://github.com/Pro-shanto06",
    icon: <FaGithubSquare />,
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/Pacific000/",
    icon: <FaFacebookSquare />,
  },
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/pro_shanto",
    icon: <SiLeetcode />,
  },
  {
    platform: "Codeforces",
    url: "https://codeforces.com/profile/Pro.shanto",
    icon: <SiCodeforces />,
  },
];

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social__icon"
          aria-label={link.platform}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
