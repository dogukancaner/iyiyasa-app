import React from "react";
import ContentSlider1 from "../img/content-slider1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const sliderObject = [
  {
    image: ContentSlider1,
    title: "Atık Sabunlardan Temizleyici Yapımı",
    instructor: "İrem Ortaç",
    category: "Fitness",
  },
  {
    image: ContentSlider1,
    title: "Pilatesle Yağ Yakımını Başlat",
    instructor: "Burcu Tunçok",
    category: "Mutfak",
  },
  {
    image: ContentSlider1,
    title: "Karın Odaklı Antrenman",
    instructor: "Özkan Türkoğlu",
    category: "Yoga",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
    category: "Fitness",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
    category: "Atölye",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
    category: "Farkındalık",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
    category: "Fitness",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
    category: "Uyku",
  },
];

const Content = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">İçeriklere Göz At</h1>
        <span>Hepsini Gör</span>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sliderObject.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border-2  border-gray-200 rounded-lg">
                <div className="flex flex-col items-start relative">
                  <img
                    src={item.image}
                    alt="content-slider1"
                    className="w-full h-64 rounded-lg object-cover"
                  />
                  <span className="absolute left-4 top-4 text-black border-2 p-1 border-transparent rounded-lg text-sm bg-gray-100 font-bold">
                    {item.category}
                  </span>
                  <span className="absolute top-48 left-4 text-black border-gray-100  p-1 rounded-lg text-sm bg-gray-100 font-bold">
                    15dk
                  </span>
                  <div className="pl-4 h-20 mt-2">
                    <h1 className="text-x font-bold lg:mb-2">{item.title}</h1>
                    <span className="text-sm text-gray-500  font-medium">
                      {item.instructor}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end items-center mt-2 ">
          <span className="border-2 rounded-full p-2 mr-2">
            <FaChevronLeft />
          </span>
          <span className="border-2 rounded-full p-2">
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
