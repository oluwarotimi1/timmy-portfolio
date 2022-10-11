import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Work with design team to build web paltforms</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Interface with clients, providing technological expertise .</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Building User Interface and Experience Designs</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Increasing the quantity and quality of traffic to your website through organic search engine results</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Maintenance of Websites to safeguard all types of data against theft and loss</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Generating Topic Ideas Appealling To Clients And Intended Cosumers</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Understanding Target Market and Pinpointing User's Objection</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Creating Content Around Those Ideas, And 
                Making Information Accessible</p>
            </li>
            <li>
              <BiCheck  className='service__list-icon'/>
              <p>Organise Website Content Components, Build and Test Website Content's Structure</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
