import React from "react";
import "./Reviews.scss";
import { Container } from "react-bootstrap";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import User from "../../assets/images/person3.jpg";
import User2 from "../../assets/images/person1.jpg";
import User3 from "../../assets/images/person2.jpg";
import User4 from "../../assets/images/slider.jpeg";
import User5 from "../../assets/images/person4.jpg";
import User6 from "../../assets/images/person5.jpg";
import User7 from "../../assets/images/person6.jpg";
import { useTranslation } from "react-i18next";
const Reviews = () => {
  const { t } = useTranslation();
  return (
    <div className="reviews" id="reviews">
      <Container fluid="xl">
        <div className="title">
          <h2> {t("reviews.title")}</h2>
          <h1>{t("reviews.text")}</h1>
          <p>
          {t("reviews.desc")}
          </p>
        </div>
      </Container>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
              <p>The service was amazing. I never had seen ever this system.</p>
              <span>Jane Doe</span>
            </div>
            <div className="right">
              <img src={User} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing. I never had seen ever this system.</p>
              <span>Jane Doe</span>
            </div>
            <div className="right">
              <img src={User2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing. I never had seen ever this system.</p>
              <span>Jane Doe</span>
            </div>
            <div className="right">
              <img src={User3} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing. I never had seen ever this system.</p>
              <span>Jane Doe</span>
            </div>
            <div className="right">
              <img src={User4} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing. I never had seen ever this system.</p>
              <span>Jane Doe</span>
            </div>
            <div className="right">
              <img src={User5} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing. I never had seen ever this system.</p>
              <span>Jane Doe</span>
            </div>
            <div className="right">
              <img src={User6} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_card">
            <div className="left">
              <p>The service was amazing. I never had seen ever this system.</p>
              <span>Jane Doe</span>
            </div>
            <div className="right">
              <img src={User7} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
