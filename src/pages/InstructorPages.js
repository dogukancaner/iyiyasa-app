import React from "react";

import Instructor1 from "../img/instructor-1.webp";
import Instructor2 from "../img/instructor-2.webp";
import Instructor3 from "../img/instructor-3.webp";
import Instructor4 from "../img/instructor-4.webp";
import Instructor5 from "../img/instructor-5.webp";
import Instructor6 from "../img/instructor-6.webp";
import Instructor7 from "../img/instructor-7.webp";
import Instructor8 from "../img/instructor-8.webp";
import Instructor9 from "../img/instructor-9.webp";
import Instructor10 from "../img/instructor-10.webp";
import Instructor11 from "../img/instructor-11.webp";
import Instructor12 from "../img/instructor-12.webp";
import Instructor13 from "../img/instructor-13.webp";
import Instructor14 from "../img/instructor-14.webp";

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
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Eğitmenlerimizle Tanış</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ">
        {instructorObject.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer w-full h-96 [perspective:1000px]"
          >
            <div className="relative h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <picture>
                  <source srcSet={item.image} type="image/webp" />
                  <img
                    className="h-full w-full rounded-lg object-cover shadow-xl shadow-black/40"
                    src={item.image}
                    alt=""
                  />
                </picture>
                {/* <img
                  className="h-full w-full rounded-lg object-cover shadow-xl shadow-black/40"
                  src={item.image}
                  alt=""
                /> */}
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex gap-3 min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold">{item.instructorname}</h1>
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
