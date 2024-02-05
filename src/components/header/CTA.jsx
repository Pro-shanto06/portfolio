import React from 'react'
import { FaArrowCircleDown } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";




const CTA = () => {
  return (
    <div className='cta'>
      <a href="#contact" className='btn btn-primary'><MdOutlinePhoneInTalk />
        Let's Talk</a>
      <a href="#footer" className='btn'>
        <FaArrowCircleDown /> Scroll Down
      </a>
    </div>
  )
}

export default CTA