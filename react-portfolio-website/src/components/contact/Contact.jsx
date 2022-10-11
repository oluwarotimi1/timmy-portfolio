import React, {useState, useTransition} from 'react'
import './contact.css'

import {AiOutlineMail} from 'react-icons/ai'
import {SiDiscord} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

import swal from 'sweetalert';


const Contact = () => {
  
  const form = useRef();
  
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dprzees', 'template_vni1ikz', form.current, 'AfLU6DhGI7RLVQiQP')
      
    e.target.reset() 
    
    swal({
      title: "Message Sent",
      text: "A Reply Will Be Sent To Your Email Shortly, Thanks!",
      icon: "success",
      button: "Return To Porfolio",
    });
    // .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  const [startTransition] = useTransition({
    timeoutMs:5000
  })

  return (
    <section className="container" id="contact">
      <h5>Get In Touch</h5>
      <h3> I build SEO friendly website. Lets build something superb!!</h3>
      <h2>Contact Me</h2>
      

      <div className="container contact__container">
          <div className="contact__cards">
            <article className="contact__card">
              <AiOutlineMail className='contact__icon' />
              <h4>Email</h4>
              <h5>oluwarotimi911@gmail.com</h5>
              <a href='mailto:oluwarotimi911@gmail.com' target='_blank'>Send a message</a>
            </article>
            <article className="contact__card">
              <SiDiscord className='contact__icon' />
              <h4>Discord</h4>
              <h5>TimmyCrown#1631</h5>
              <a href='https://discord.com/' target='_blank'>Send a message</a>
            </article>
            <article className="contact__card">
              <BsWhatsapp className='contact__icon' />
              <h4>Whatsapp</h4>
              <h5>(+234)8061916170</h5>
              <a href='https://wa.me/message/U2BVV3PZQC5NP1' target='_blank'>Send a message</a>
            </article>
            <article className="contact__card">
              <FiTwitter className='contact__icon' />
              <h4>Twitter</h4>
              <h5>TimmyCrown.jsx</h5>
              <a href='https://twitter.com/Demolaa_' target='_blank'>Send a message</a>
            </article>
          </div>
                {/* END OF CONTACT OPTIONS */}

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Full Name' required/>
            <input type='email' name='email' placeholder='Valid Email Address' required />
            <textarea name='message' rows='7' placeholder='Type Message Here' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>

                {/* onClick={sendEmail} << window.location.reload();<<===== That's what's supposed to be in the above code*/}
          </form>
      </ div>

    </section>
  )
}

export default Contact
