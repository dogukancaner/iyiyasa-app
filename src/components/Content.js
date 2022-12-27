import React from "react";
import ContentSlider1 from "../img/content-slider1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

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
];

const Content = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">İçeriklere Göz At</h1>
        <span>Hepsini Gör</span>
      </div>
      <div></div>
    </div>
  );
};

export default Content;
