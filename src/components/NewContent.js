import React, { useRef } from "react";
import NewContent1 from "../img/new-content-1.jpg";
import NewContent2 from "../img/new-content-2.jpg";
import NewContent3 from "../img/new-content-3.jpg";
import NewContent4 from "../img/new-content-4.jpg";
import NewContent5 from "../img/new-content-5.jpg";
import NewContent6 from "../img/new-content-6.jpg";
import NewContent7 from "../img/new-content-7.jpg";
import NewContent8 from "../img/new-content-8.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";

const sliderObject = [
  {
    image: NewContent1,
    title: "Tatlı Bağımlılığından Nasıl Kurtulabilirim?",
    instructor: "Diyetkolik",
    category: "Mutfak",
    time: "1dk",
  },
  {
    image: NewContent2,
    title: "Kilo Verirken Ne Kadar Egzersiz Yapmalıyım?",
    instructor: "Diyetkolik",
    category: "Mutfak",
    time: "1dk",
  },
  {
    image: NewContent3,
    title: "Karbonhidrat Yemeyi Azaltarak Kilo Verebilir Miyim?",
    instructor: "Diyetkolik",
    category: "Mutfak",
    time: "1dk",
  },
  {
    image: NewContent4,
    title: "Protein Tozu Kullanmak Zararlı Mı?",
    instructor: "Diyetkolik",
    category: "Mutfak",
    time: "1dk",
  },
  {
    image: NewContent5,
    title: "Reformer Pilates Etkili İç-Dış Bacak Egzersizi",
    instructor: "Gözde Yavuzyılmaz",
    category: "Fitness",
    time: "16dk",
  },
  {
    image: NewContent6,
    title: "Reformer Pilates Etkili Karın Egzersizi",
    instructor: "Gözde Yavuzyılmaz",
    category: "Fitness",
    time: "11dk",
  },
  {
    image: NewContent7,
    title: "Reformer Pilates Etkili Üst Beden Antremanı",
    instructor: "Gözde Yavuzyılmaz",
    category: "Fitness",
    time: "25dk",
  },
  {
    image: NewContent8,
    title: "Reformer Pilates Etkili Kalça Egzersizi",
    instructor: "Gözde Yavuzyılmaz",
    category: "Fitness",
    time: "14dk",
  },
];

const NewContent = () => {
  const swiperRef = useRef();
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">En Yeniler</h1>
        <span className="text-gray-600 font-medium text-md">Hepsini Gör</span>
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
          className="mt-4"
        >
          {sliderObject.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border-2 cursor-pointer border-gray-200 rounded-lg  hover:scale-95 duration-300">
                <div className="flex flex-col items-start relative">
                  <img
                    src={item.image}
                    alt="content-slider1"
                    className="w-full h-42 rounded-lg object-cover"
                  />
                  <span className="absolute left-4 top-2 text-black border-2 p-1 border-transparent rounded-lg text-sm bg-gray-100 font-bold">
                    {item.category}
                  </span>
                  <span className="absolute right-4 top-2 text-black  p-1 rounded-full text-sm bg-gray-50 font-bold">
                    <HiOutlineHeart size={22} />
                  </span>
                  <span className="absolute top-36 left-4 text-black border-gray-100  p-1 rounded-lg text-sm bg-gray-100 font-bold">
                    {item.time}
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
          <span className="border-2 border-gray-600 rounded-full  p-2 mr-2 cursor-pointer">
            <FaChevronLeft onClick={() => swiperRef.current?.slidePrev()} />
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

export default NewContent;
