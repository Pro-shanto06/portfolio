import React from "react";
import "./testimonials.css";
import CLIENT from "../../assets/prooo.jpg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Dishan Ahmed",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui reiciendis id impedit facilis labore sit ipsum, dolor ducimus incidunt, consectetur, voluptatum aperiam molestiae mollitia cupiditate in doloribus molestias animi?",
      image: CLIENT,
    },
    {
      name: "Dishan Ahmed",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui reiciendis id impedit facilis labore sit ipsum, dolor ducimus incidunt, consectetur, voluptatum aperiam molestiae mollitia cupiditate in doloribus molestias animi?",
      image: CLIENT,
    },
    {
      name: "Dishan Ahmed",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui reiciendis id impedit facilis labore sit ipsum, dolor ducimus incidunt, consectetur, voluptatum aperiam molestiae mollitia cupiditate in doloribus molestias animi?",
      image: CLIENT,
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonials-client-image"
              />
            </div>
            <h5 className="client__name">{testimonial.name}</h5>
            <small className="client__review">{testimonial.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
