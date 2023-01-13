import React from 'react'
import './about.css'
import ME from '../../assets/me_3_.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>ABout Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'> 
            <img src={ME} alt='About Image' /> 
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiences</h5>
              <small>2+ years working</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>15+</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a young motivated and skilled full stack web developer, using the latest technologies to solve real life problems. I have 
            serious passion for UI effects, animations and creating intuitive, dynamic user experienced websites. 
            
            I'm currently focused on building SEO friendly websites and also intergrating Web3 applications for companies/individual by bringing 
            real life implementation experience in API based integration, visual layout development and UI design implementations.


          </p>
          <a href='#contact' className='btn btn-primary about__btn'>Get In Touch >>></a>
        </div>
      </div>
    </section>
  )
}

export default About