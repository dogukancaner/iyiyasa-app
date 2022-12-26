import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Slider1 from "../img/slider-1.jpg";
import Slider2 from "../img/slider-2.jpg";
import Slider3 from "../img/slider-3.jpg";
import Slider4 from "../img/slider-4.jpg";
import Slider5 from "../img/slider-5.jpg";

const sliderObject = [
  {
    image: Slider1,
  },
  {
    image: Slider2,
  },
  {
    image: Slider3,
  },
  {
    image: Slider4,
  },
  {
    image: Slider5,
  },
];

const Slider = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliderObject.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={item.image}
                  alt="slider"
                  className="w-full  object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="../img/slider-1.jpg"
              className="w-full h-96 object-cover"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};

export default Slider;
