import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact'className='btn btn-primary button'><span>Let's Talk</span></a>
    </div>
  )
}

export default CTA