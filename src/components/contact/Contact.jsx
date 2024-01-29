import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xkhfrur', 'template_t51o4yw', form.current, '6ANUoEMB5_Xb4Gzyb')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>proshantosaha1999@gmail.com</h5>
            <a href="mailto:proshantosaha1999@gmail.com" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
          <PiMessengerLogoBold className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Proshanto Saha</h5>
            <a href="https://m.me/Pacific000" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>01982058615</h5>
            <a href="https://wa.me/8801982058615" target="_blank">Send A Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required></input>
          <input type="email" name='email' placeholder='Your Email' required></input>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact