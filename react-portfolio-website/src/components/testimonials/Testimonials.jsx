import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/assets_2/avatar1.jpg'
import AVATAR2 from '../../assets/assets_2/avatar2.jpg'
import AVATAR3 from '../../assets/assets_2/avatar3.jpg'


import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

const data=[
  {
    avatar: AVATAR1,
    name:'Esther Paul',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, tempora nemo? Esse cum quas repudiandae, dolore quia quisquam beatae nihil minus labore, odit officiis laudantium, ratione architecto quis repellat quaerat.'
  },
  {
    avatar: AVATAR2,
    name:'Peter Atabo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, tempora nemo? Esse cum quas repudiandae, dolore quia quisquam beatae nihil minus labore, odit officiis laudantium, ratione architecto quis repellat quaerat.'
  },
  {
    avatar: AVATAR3,
    name:'Alwawiye Kayode',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, tempora nemo? Esse cum quas repudiandae, dolore quia quisquam beatae nihil minus labore, odit officiis laudantium, ratione architecto quis repellat quaerat.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
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
