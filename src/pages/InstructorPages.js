import React, { useState } from "react";

import Instructor1 from "../img/instructor-1.png";
import Instructor2 from "../img/instructor-2.png";
import Instructor3 from "../img/instructor-3.png";
import Instructor4 from "../img/instructor-4.png";
import Instructor5 from "../img/instructor-5.png";
import Instructor6 from "../img/instructor-6.png";
import Instructor7 from "../img/instructor-7.png";
import Instructor8 from "../img/instructor-8.png";
import Instructor9 from "../img/instructor-9.png";
import Instructor10 from "../img/instructor-10.png";
import Instructor11 from "../img/instructor-11.png";
import Instructor12 from "../img/instructor-12.png";
import Instructor13 from "../img/instructor-13.png";
import Instructor14 from "../img/instructor-14.png";

const instructorObject = [
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
  {
    image: Instructor4,
    instructorname: "Can Aksu",
    branch: "Fitness",
  },
  {
    image: Instructor5,
    instructorname: "Ceyda Çelikel",
    branch: "Fitness",
  },
  {
    image: Instructor6,
    instructorname: "Çiğdem Bakır",
    branch: "Fitness",
  },
  {
    image: Instructor7,
    instructorname: "Demet Yoruç",
    branch: "Yoga",
  },
  {
    image: Instructor8,
    instructorname: "Diyetkolik",
    branch: "Beslenme",
  },
  {
    image: Instructor9,
    instructorname: "Ege Küçükfiden",
    branch: "Şef",
  },
  {
    image: Instructor10,
    instructorname: "Emine Boyner",
    branch: "Atölye Patika",
  },
  {
    image: Instructor11,
    instructorname: "Ercan Çimenay",
    branch: "Fitness",
  },
  {
    image: Instructor12,
    instructorname: "Ercan Tepe",
    branch: "Fitness",
  },
  {
    image: Instructor13,
    instructorname: "Erhan Tügen",
    branch: "Fitness",
  },
  {
    image: Instructor14,
    instructorname: "Eti Lifalif",
    branch: "Beslenme",
  },
];

const Instructor = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Eğitmenlerimizle Tanış</h1>
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

      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ">
        {instructorObject
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.instructorname.toLowerCase().includes(search.toLowerCase())
              ? item
              : item.branch.toLowerCase().includes(search.toLowerCase());
          })
          .map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer w-full h-96 [perspective:1000px]"
            >
              <div className="relative h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full rounded-lg object-cover shadow-xl shadow-black/40"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex gap-3 min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">
                      {item.instructorname}
                    </h1>
                    <p className="text-xl">{item.branch}</p>
                    <button className=" rounded-md bg-neutral-600 py-1 px-2 text-lg hover:bg-neutral-800">
                      Keşfet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Instructor;
