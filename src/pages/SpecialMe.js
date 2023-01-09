import React, { useState } from "react";

const wishListObject = [
  {
    title: "Element Yogası Serisi",
    instructor: "Ayşe Aşçı",
    category: "Yoga",
  },
  {
    title: "10 Günde Yağ Yak",
    instructor: "Adil Ayvaz",
    category: "Fitness",
  },
  {
    title: "İdeal Kilo Nasıl Korunur?",
    instructor: "Diyetkolik",
    category: "Mutfak",
  },
];
const historyObject = [
  {
    title: "Sumo Squat Nasıl Yapılır?",
    instructor: "Halil Kılıç",
    category: "Fitness",
  },
  {
    title: "Curtsy Lunge Nasıl Yapılır?",
    instructor: "Verda Kutsal",
    category: "Fitness",
  },
  {
    title: "Mağarada Güçlen 2 (AMRAP)",
    instructor: "Tuğrul Çağrı Yılmazer",
    category: "Fitness",
  },
];
const SpecialMe = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container mx-auto p-4 h-screen ">
      <div className="flex justify-between">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Bana Özel</h1>
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
      <div className="grid lg:grid-cols-2 md:grid-cols-1  mb-2 gap-2 ">
        <div>
          <div className=" p-4 text-xl font-medium border border-gray-400 rounded-lg">
            Geçmişte İzlediklerim
          </div>
          <div>
            {historyObject
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search.toLowerCase())
                  ? item
                  : item.category
                      .toLowerCase()

                      .includes(search.toLowerCase());
              })
              .map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 mb-2 mt-2 bg-gray-300 rounded-2xl  hover:scale-90 transition duration-300"
                >
                  <div className="p-4">{item.title}</div>
                  <div className="p-4">{item.instructor}</div>
                  <div className="p-4">{item.category}</div>
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className="p-4 text-xl font-medium  border border-gray-400 rounded-lg">
            Favorilerim
          </div>
          <div>
            {wishListObject
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search.toLowerCase())
                  ? item
                  : item.category.toLowerCase().includes(search.toLowerCase());
              })
              .map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 mb-2 mt-2 bg-gray-300 rounded-2xl hover:scale-90 transition duration-300 "
                >
                  <div className="p-4">{item.title}</div>
                  <div className="p-4">{item.instructor}</div>
                  <div className="p-4">{item.category}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMe;
