import React, {useRef} from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'

import emailjs from 'emailjs-com'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_0fj74be', 'template_qre34km', form.current, 'QuElOU-k578m1VcOJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">

        {/* Left */}
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>dimabezostii2@gmail.com</h5>
            <a href="mailto:dimabezostii2@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
            <AiOutlineInstagram className="contact-option-icon" />
            <h4>Instagram</h4>
            <h5>@dimabezostii</h5>
            <a href="https://www.instagram.com/dimabezostii/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/* Right */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact