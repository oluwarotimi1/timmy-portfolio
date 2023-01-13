import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'

const Portfolio = () => {
  return (
    <section id='portfolio'> 
      <h5>My Works</h5>
      <h2>Past Projects</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img8} alt='' />
          </div>
          <div className="portfolio__item-cta">
          <h3>E-commerce Website For Product Wears and Electronics Built With React</h3>
          <a href="https://shopifycart.netlify.app/" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img9} alt='' />
          </div>
          <div className="portfolio__item-cta">
          <h3>Crypto and Forex Edu-Tech Website</h3>
          <a href="https://rtacademy.netlify.app/" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt='' />
          </div>
          <div className="portfolio__item-cta">
          <h3>25 Design Studio Created For User Centered Designs</h3>
          <a href="https://gifted-mahavira-756053.netlify.app/" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img10} alt='' />
          </div>
          <div className="portfolio__item-cta">
          <h3>Chat Platform Intergrated Into an Edu-Tech Website</h3>
          <a href="https://rtacademy.netlify.app/social" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt='' />
          </div>
          <div className="portfolio__item-cta">
            <h3>Bootcamp Website To Becoming A Web Developer</h3>
            <a href="https://compassionate-snyder-6040d4.netlify.app/" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
         </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt='' />
          </div>
          <div className="portfolio__item-cta">
             <h3>An E-Commerce Website Front-End Design For Super Value Deals</h3>
            <a href="https://meek-tulumba-0804b4.netlify.app/" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
          </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img5} alt='' />
          </div>
          <div className="portfolio__item-cta">
            <h3>A Single Live Filter Page Linked To A Random API</h3>
            <a href="https://lighthearted-cobbler-7ce921.netlify.app/" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
          </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt='' />
          </div>
          <div className="portfolio__item-cta">
            <h3>Website Built For "Organic Foods" Online Orders</h3>
            <a href="https://pedantic-payne-d7d724.netlify.app/" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
          </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img6} alt='' />
          </div>
          <div className="portfolio__item-cta">
             <h3>Weather Application</h3>
            <a href="https://super-pudding-7cb3b2.netlify.app/" className='btn btn-primary' target='_blank'> Visit Site</a>
          </div>
         </article>
      </div>

        
    </section>
  )
}

export default Portfolio
