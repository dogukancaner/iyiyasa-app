import React from "react";
import ContentSlider1 from "../img/content-slider1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const sliderObject = [
  {
    image: ContentSlider1,
    title: "Atık Sabunlardan Temizleyici Yapımı",
    instructor: "İrem Ortaç",
  },
  {
    image: ContentSlider1,
    title: "Pilatesle Yağ Yakımını Başlat",
    instructor: "Burcu Tunçok",
  },
  {
    image: ContentSlider1,
    title: "Karın Odaklı Antrenman",
    instructor: "Özkan Türkoğlu",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
  },
  {
    image: ContentSlider1,
    title: "Yulaflı Kakaolu Muhallebi",
    instructor: "Eti Lifalif",
  },
];

const Content = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">İçeriklere Göz At</h1>
        <span>Hepsini Gör</span>
      </div>
      <div>
        <Swiper
          className="mt-4"
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {sliderObject.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border-2 border-gray-200 rounded-lg">
                <div className="flex flex-col items-start">
                  <img
                    src={item.image}
                    alt="content-slider1"
                    className="w-full h-64 rounded-lg"
                  />
                  <div className="pl-4 mb-4 mt-2">
                    <h1 className="text-x font-bold mt-1 mb-1">{item.title}</h1>
                    <span className="text-sm text-gray-500  font-medium">
                      {item.instructor}
                    </span>
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
