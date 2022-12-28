import React from "react";

import DiscoverContent1 from "../img/discover-content.jpg";
import Instructor1 from "../img/instructor-1.jpg";
import Instructor2 from "../img/instructor-2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const sliderObject = [
  {
    image: Instructor1,
    instructorname: "Adil Ayvaz",
    branch: "Fitness",
  },
  {
    image: Instructor2,
    instructorname: "Ayşe Aşçı",
    branch: "Yoga",
  },
  {
    image: Instructor1,
    instructorname: "Adil Ayvaz",
    branch: "Fitness",
  },
];

const Content = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">İyi Yaşamı Keşfet</h1>
        <span>Hepsini Gör</span>
      </div>
      <div>
        <Swiper
          className="mt-4"
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={2}
          navigation={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {sliderObject.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start relative">
                <img
                  src={item.image}
                  alt="content-slider1"
                  className="w-full object-cover h-96 rounded-lg"
                />
                <div className=" absolute top-72 pl-10">
                  <h1 className=" text-white font-bold mt-1 mb-1 text-2xl">
                    {item.instructorname}
                  </h1>
                </div>
                <div className="absolute pl-10 mb-4 text-white text-lg flex font-medium top-80 gap-96 mt-2 ">
                  <p>{item.branch}</p>
                  <p className="ml-24">Keşfet</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Content;
