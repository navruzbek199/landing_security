import React from 'react'
import './Reviews.scss'
import { Container } from 'react-bootstrap'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import User from '../../assets/images/slider.jpeg'
const Reviews = () => {
  return (
    <div className='reviews'>
      <Container fluid="xl">
        <div className="title">
          <h2>Reviews</h2>
          <h1>
            Clients’ feedback about us
          </h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the <br /> 1500s</p>
        </div>
      </Container>
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        loop={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        
        // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing.
                I never had seen
                ever this system.</p>
                <span>
                  Jane Doe
                </span>
            </div>
            <div className="right">
                <img src={User} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing.
                I never had seen
                ever this system.</p>
                <span>
                  Jane Doe
                </span>
            </div>
            <div className="right">
                <img src={User} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing.
                I never had seen
                ever this system.</p>
                <span>
                  Jane Doe
                </span>
            </div>
            <div className="right">
                <img src={User} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing.
                I never had seen
                ever this system.</p>
                <span>
                  Jane Doe
                </span>
            </div>
            <div className="right">
                <img src={User} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing.
                I never had seen
                ever this system.</p>
                <span>
                  Jane Doe
                </span>
            </div>
            <div className="right">
                <img src={User} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing.
                I never had seen
                ever this system.</p>
                <span>
                  Jane Doe
                </span>
            </div>
            <div className="right">
                <img src={User} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing.
                I never had seen
                ever this system.</p>
                <span>
                  Jane Doe
                </span>
            </div>
            <div className="right">
                <img src={User} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Reviews