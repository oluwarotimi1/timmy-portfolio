import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/oluwarotimi-adebisi' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/oluwarotimi1' target='_blank'><FaGithub /></a>
        <a href='https://twitter.com/Demolaa_' target='_blank'><FaTwitterSquare /></a>
    </div>
  )
}

export default HeaderSocials