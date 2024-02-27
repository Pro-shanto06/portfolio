import React from 'react'
import './testimonials.css'
import CLIENT from '../../assets/prooo.jpg'

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={CLIENT} alt = "" className='testimonials-client-image'/>
          </div>
          <h5 className='client__name'>Dishan Ahmed</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui reiciendis id impedit facilis labore sit ipsum, dolor ducimus incidunt, consectetur, voluptatum aperiam molestiae mollitia cupiditate in doloribus molestias animi?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={CLIENT} alt = "" className='testimonials-client-image'/>
          </div>
          <h5 className='client__name'>Dishan Ahmed</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui reiciendis id impedit facilis labore sit ipsum, dolor ducimus incidunt, consectetur, voluptatum aperiam molestiae mollitia cupiditate in doloribus molestias animi?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={CLIENT} alt = "" className='testimonials-client-image'/>
          </div>
          <h5 className='client__name'>Dishan Ahmed</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui reiciendis id impedit facilis labore sit ipsum, dolor ducimus incidunt, consectetur, voluptatum aperiam molestiae mollitia cupiditate in doloribus molestias animi?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials