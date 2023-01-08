import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

import Slider1 from "../img/slider-1.png";
import Slider2 from "../img/slider-2.png";
import Slider3 from "../img/slider-3.png";
import Slider4 from "../img/slider-4.png";
import Slider5 from "../img/slider-5.png";
import Slider6 from "../img/slider-6.png";
import Slider7 from "../img/slider-7.png";
import Slider8 from "../img/slider-8.png";

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
        className=" w-3/4"
      >
        {sliderObject.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img
                  src={item.image}
                  alt="slider"
                  className=" cursor-pointer object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
