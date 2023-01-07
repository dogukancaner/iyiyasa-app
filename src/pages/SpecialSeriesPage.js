import React from "react";
import Series1 from "../img/series-1.png";
import Series3 from "../img/series-3.png";
import Series4 from "../img/series-4.png";
import Series7 from "../img/series-7.png";
import Series8 from "../img/series-8.png";
import Series9 from "../img/series-9.png";
import Series10 from "../img/series-10.png";
import Series12 from "../img/series-12.png";
import Series13 from "../img/series-13.png";

const seriesObject = [
  {
    image: Series1,
    title: "Sımsıkı Karın Serisi",
    numberoflessons: "16 Ders",
  },
  {
    image: Series1,
    title: "Diyetisyenlere Sıkça Sorulan Sorular",
    numberoflessons: "20 Ders",
  },
  {
    image: Series3,
    title: "İyi Yaşa Top 10",
    numberoflessons: "10 Ders",
  },
  {
    image: Series4,
    title: "18 Adımda Sıkı ve İnce Bacaklar",
    numberoflessons: "18 Ders",
  },
  {
    image: Series1,
    title: "Reformer Pilates Etkili Egzersiz Serisi",
    numberoflessons: "5 Ders",
  },
  {
    image: Series7,
    title: "Metabolik Kondisyon Antrenman Serisi",
    numberoflessons: "7 Ders",
  },
  {
    image: Series8,
    title: "Yeni Başlayanlar İçin Yoga",
    numberoflessons: "12 Ders",
  },
  {
    image: Series9,
    title: "Stresten Arınmanı Sağlayacak Meditasyonlar",
    numberoflessons: "12 Ders",
  },
  {
    image: Series10,
    title: "Stüdyo Yoga Akışları",
    numberoflessons: "10 Ders",
  },
  {
    image: Series1,
    title: "14 Günlük Yüz Yogası Serisi",
    numberoflessons: "14 Ders",
  },
  {
    image: Series12,
    title: "Üst Beden Sıkışlaşma",
    numberoflessons: "12 Ders",
  },
  {
    image: Series13,
    title: "Pilates Serisi",
    numberoflessons: "11 Ders",
  },
];

const SpecialSeriesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-2">
        <h1 className="text-2xl font-bold">Özel Seriler</h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {seriesObject.map((item, index) => (
          <div
            key={index}
            className="border-2 cursor-pointer border-gray-200 rounded-lg hover:scale-95 duration-300"
          >
            <div className="flex flex-col items-start">
              <img
                src={item.image}
                alt="content-slider1"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2  p-4">
              <h1 className="text-md font-medium text-gray-700">
                {item.title}
              </h1>
              <span className="text-sm font-medium text-gray-700">
                {item.numberoflessons}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialSeriesPage;
