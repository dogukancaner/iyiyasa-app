import React from "react";

import Instructor1 from "../img/instructor-1.jpg";
import Instructor2 from "../img/instructor-2.jpg";
import Instructor3 from "../img/instructor-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

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
    image: Instructor3,
    instructorname: "Burcu Tunçok",
    branch: "Pilates",
  },
];

const Content = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Eğitmenlerimizle Tanış</h1>
        <span>Hepsini Gör</span>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mt-4"
        >
          {sliderObject.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group w-full h-96 [perspective:1000px]">
                <div className="relative h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full rounded-lg object-cover shadow-xl shadow-black/40"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h1 className="text-3xl font-bold">
                        {item.instructorname}
                      </h1>
                      <p className="text-xl">{item.branch}</p>
                      <button className="mt-4 rounded-md bg-neutral-600 py-1 px-2 text-lg hover:bg-neutral-800">
                        Keşfet
                      </button>
                    </div>
                  </div>
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
