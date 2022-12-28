import React from "react";

import DiscoverContent1 from "../img/discover-content.jpg";
import DiscoverContent2 from "../img/discover-content-2.jpg";
import DiscoverContent3 from "../img/discover-content-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const sliderObject = [
  {
    image: DiscoverContent1,
    title: "Metabolik Kondisyon Antreman Serisi",
    numberofcourses: "7 Ders",
  },
  {
    image: DiscoverContent2,
    title: "Yeni Başlayanlar için Fitness",
    numberofcourses: "12 Ders",
  },
  {
    image: DiscoverContent3,
    title: "Yeni Başlayanlar için Fitness",
    numberofcourses: "14 Ders",
  },
  {
    image: DiscoverContent1,
    title: "Yeni Başlayanlar için Fitness",
    numberofcourses: "7 Ders",
  },
  {
    image: DiscoverContent2,
    title: "Yeni Başlayanlar için Fitness",
    numberofcourses: "12 Ders",
  },
  {
    image: DiscoverContent3,
    title: "Yeni Başlayanlar için Fitness",
    numberofcourses: "14 Ders",
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
          slidesPerView={3}
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
              slidesPerView: 3,
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
                  className="w-full object-cover h-64 rounded-lg"
                />
                <div className=" absolute top-44 pl-4 mb-4 mt-2">
                  <h1 className=" text-white font-bold mt-1 mb-1 text-lg">
                    {item.title}
                  </h1>
                </div>
                <div className="absolute pl-4 mb-4 text-white text-md flex justify-between font-medium top-52 gap-80 mt-2 ">
                  <p>{item.numberofcourses}</p>
                  <p>Keşfet</p>
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
