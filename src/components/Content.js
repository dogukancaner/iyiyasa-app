import React, { useRef } from "react";
import Content1 from "../img/content-1.png";
import Content2 from "../img/content-2.png";
import Content3 from "../img/content-3.png";
import Content4 from "../img/content-4.png";
import Content5 from "../img/content-5.png";
import Content6 from "../img/content-6.png";
import Content7 from "../img/content-7.png";
import Content8 from "../img/content-8.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import { HiOutlineHeart } from "react-icons/hi";

const sliderObject = [
  {
    image: Content1,
    title: "Sumo Squat Nasıl Yapılır?",
    instructor: "Halil Kılıç",
    category: "Fitness",
    time: "15dk",
  },
  {
    image: Content2,
    title: "Kalça Bacak Sıkılaştırma Egzersizi Nasıl Yapılır?",
    instructor: "Burcu Tunçok",
    category: "Fitness",
    time: "12dk",
  },
  {
    image: Content3,
    title: "Curtsy Lunge Nasıl Yapılır?",
    instructor: "Verda Kutsal",
    category: "Fitness",
    time: "10dk",
  },
  {
    image: Content4,
    title: "Mağarada Güçlen 2 (AMRAP)",
    instructor: "Tuğrul Çağrı Yılmazer",
    category: "Fitness",
    time: "16dk",
  },
  {
    image: Content5,
    title: "Mağarada Güçlen 2 (AMRAP)",
    instructor: "Tuğrul Çağrı Yılmazer",
    category: "Fitness",
    time: "16dk",
  },
  {
    image: Content6,
    title: "Gua Sha ile Tüm Yüz",
    instructor: "Nihan Büyükaksu",
    category: "Yoga",
    time: "15dk",
  },
  {
    image: Content7,
    title: "Pesketaryan Beslenme Nedir?",
    instructor: "Diyetkolik",
    category: "Mutfak",
    time: "2dk",
  },
  {
    image: Content8,
    title: "İdeal Kilo Nasıl Korunur?",
    instructor: "Diyetkolik",
    category: "Mutfak",
    time: "2dk",
  },
];

const Content = () => {
  const swiperRef = useRef();
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">İçeriklere Göz At</h1>
        <span className="text-gray-600 font-medium text-md cursor-pointer">
          Hepsini Gör
        </span>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
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
              <div className="border-2 cursor-pointer border-gray-200 rounded-lg hover:scale-95 duration-300">
                <div className="flex flex-col items-start relative ">
                  <img
                    src={item.image}
                    alt="content-slider1"
                    className="w-full h-42 rounded-lg object-cover"
                  />
                  <span className="absolute left-4 top-2 text-black  p-1 rounded-lg text-sm bg-gray-50 font-bold">
                    {item.category}
                  </span>
                  <span className="absolute right-4 top-2 text-black  p-1 rounded-full text-sm bg-gray-50 font-bold">
                    <HiOutlineHeart size={22} />
                  </span>
                  <span className="absolute top-36  left-4 text-black  p-1 rounded-lg text-sm bg-gray-50 font-bold">
                    {item.time}
                  </span>
                  <div className="pl-4 h-20 mt-2">
                    <h1 className="text-sm font-bold mb-2">{item.title}</h1>
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
          <span
            className="border-2 border-gray-600 rounded-full p-2 mr-2 cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaChevronLeft />
          </span>
          <span
            className="border-2 border-gray-600 rounded-full p-2 cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
