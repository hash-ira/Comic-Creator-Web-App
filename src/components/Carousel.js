import React from "react";
import "./../Styles/carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { ScaleLoader } from "react-spinners";

function Carousel({ imgArr, setCurrIdx, loadingIdx }) {
  // const [imgArr, setImgArr] = React.useState([{ ImgURL: "https://avatars.githubusercontent.com/u/99635297?s=48&v=4" }, { ImgURL: "https://avatars.githubusercontent.com/u/99635297?s=48&v=4" }]);
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        onSlideChange={(swiper) => setCurrIdx(swiper.realIndex)}
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
        {imgArr.map((img, index) => (
          <SwiperSlide key={index}>
            {loadingIdx === 11 ? (
              <img src={img.ImgURL} alt="slide_image" className="panel-loader-container" />
            ) : (
              <>
                {index === loadingIdx ? (
                  <div className="panel-loader-container">
                    <ScaleLoader color="black" />
                  </div>
                ) : (
                  <img src={img.ImgURL} alt="slide_image" className="panel-loader-container" />
                )}
              </>
            )}
          </SwiperSlide>
        ))}
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
