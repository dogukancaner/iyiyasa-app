import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

// import Slider1 from "../img/slider-1.png";
import Slider2 from "../img/slider-2.webp";
import Slider3 from "../img/slider-3.jpeg";
import Slider4 from "../img/slider-4.jpeg";
import Slider5 from "../img/slider-5.jpeg";
import Slider6 from "../img/slider-6.jpeg";
import Slider7 from "../img/slider-7.jpeg";
import Slider8 from "../img/slider-8.jpeg";

import Slider1 from "../img/slider-1.webp";

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
  {
    image: Slider6,
  },
  {
    image: Slider7,
  },
  {
    image: Slider8,
  },
];

const Slider = () => {
  return (
    <div className="container mx-auto p-4 text-center">
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderObject.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={item.image}
                alt="slider"
                className="w-full cursor-pointer object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
