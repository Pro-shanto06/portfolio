import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const contactOptions = [
  {
    icon: <MdOutlineEmail className="contact__option-icon" />,
    title: "Email",
    contact: "proshantosaha1999@gmail.com",
    link: "mailto:proshantosaha1999@gmail.com",
  },
  {
    icon: <PiMessengerLogoBold className="contact__option-icon" />,
    title: "Messenger",
    contact: "Proshanto Saha",
    link: "https://m.me/Pacific000",
    linkText: "Send A Message",
  },
  {
    icon: <BsWhatsapp className="contact__option-icon" />,
    title: "Whatsapp",
    contact: "01982058615",
    link: "https://wa.me/8801982058615",
    linkText: "Send A Message",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_xkhfrur",
      "template_t51o4yw",
      form.current,
      "6ANUoEMB5_Xb4Gzyb"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map((option, index) => (
            <article key={index} className="contact__option">
              {option.icon}
              <h3>{option.title}</h3>
              <h5>{option.contact}</h5>
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                {option.linkText}
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
