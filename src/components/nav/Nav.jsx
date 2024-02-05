import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { PiUserCircleGearBold } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";
import { useState } from 'react';




const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav ('#') }className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href='#about' onClick={()=>setActiveNav ('#about') } className={activeNav === '#about'? 'active' : ''}><FiUser /></a>
      <a href='#qualification' onClick={()=>setActiveNav ('#qualification') } className={activeNav === '#qualification'? 'active' : ''}><IoSchool /></a>
      <a href='#experience' onClick={()=>setActiveNav ('#experience') } className={activeNav === '#experience'? 'active' : ''}><PiUserCircleGearBold /></a>
     
      <a href='#portfolio' onClick={()=>setActiveNav ('#portfolio') } className={activeNav === '#portfolio'? 'active' : ''}><FaProjectDiagram /></a>
      <a href='#contact' onClick={()=>setActiveNav ('#contact') } className={activeNav === '#contact'? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav