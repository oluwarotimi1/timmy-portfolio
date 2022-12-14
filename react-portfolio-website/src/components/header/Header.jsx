import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me_4.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>ADEBISI OLUWAROTIMI</h2>
        <h5 className='text-light'>Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials />
        
       
        <div className="me">
          <img src={ME} alt='me'/>
        </div>
        
        <a href='#about' className='scroll__down'>Scroll Down >>></a>
      </div>
    </header>
  )
}

export default Header
