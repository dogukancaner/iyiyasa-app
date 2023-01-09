import React, { useState } from "react";
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
  const [search, setSearch] = useState("");
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <div className="mb-2">
          <h1 className="text-2xl font-bold">Özel Seriler</h1>
        </div>
        <div className="mb-4 pb-4 flex gap-4 border-b  border-gray-200 dark:border-gray-700">
          <div className="cursor-pointer">
            <svg
              className="text-gray-600r"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.0004 19.0004L14.6504 14.6504"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Ara"
            onChange={(e) => setSearch(e.target.value)}
            className="focus:outline-none bg-transparent text-sm text-gray-600"
          />
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {seriesObject
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((item, index) => (
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
