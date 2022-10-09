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
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>15+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui amet nemo aliquam, totam aliquid ut quidem? Numquam, assumenda! Facilis expedita modi sapiente voluptatum unde delectus reiciendis. Repellendus, sunt error? Corporis.

          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About