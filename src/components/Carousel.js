import React from "react";
import "./../Styles/carousel.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import images from "./../assets/images.js";

function Carousel(props) {
  return (
    <div className="container">
      {/* <h1 className="heading">Scene X</h1> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={props.ImgURL} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.data[1].src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.data[0].src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.data[1].src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.data[0].src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.data[1].src} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.data[0].src} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}


export default Carousel;