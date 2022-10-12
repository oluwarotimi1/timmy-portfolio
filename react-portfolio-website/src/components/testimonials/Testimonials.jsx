import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/assets_2/avatar1.jpg'
import AVATAR2 from '../../assets/assets_2/avatar2.jpeg'
// import AVATAR3 from '../../assets/assets_2/avatar3.jpg'


import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

const data=[
  {
    avatar: AVATAR2,
    name:'Daniel Akinwande',
    review: 'It’s a pleasure for me to recommend Oluwarotimi to all interested parties. He was professional and competent throughout the process of our working together. The reaction to our new web site has been amazing. The same can be said for our opinion of Rotimi’s work for us. Thanks once again for your patience and diligence in promptly meeting each of our requests for the site during its development.'
  },
  {
    avatar: AVATAR1,
    name:'Alawiye Kayode',
    review: 'Working as a junior developer, Oluwarotimi has shown all form of seriousness, zeal and pivoted attitude towards building websites and creating contents. He handles all barricades and impediments faced while building; debugging and searching for solutions to all issues faced while writing codes. I like working with relentless and great minds like that of Oluwarotimi. Having him on your team will bring positivity!'
  },
  // {
  //   avatar: AVATAR3,
  //   name:'Alwawiye Kayode',
  //   review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, tempora nemo? Esse cum quas repudiandae, dolore quia quisquam beatae nihil minus labore, odit officiis laudantium, ratione architecto quis repellat quaerat.'
  // }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Some Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container mySwiper"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt="AVATAR one" />
                </div>
                <div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
