import React from "react";
import Category1 from "../img/category-1.png";
import Category2 from "../img/category-2.png";
import Category3 from "../img/category-3.png";
import Category4 from "../img/category-4.png";
import Category5 from "../img/category-5.png";
import Category6 from "../img/category-6.png";

const Category = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-6 gap-4">
        <span className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 bg-orange-100  hover:bg-white transition ease-in duration-700 ">
          <img src={Category1} alt="" />
          <p className=" text-orange-400 font-medium text-xl">Fitness</p>
        </span>
        <span className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 bg-indigo-100 hover:bg-white  transition ease-in duration-700 ">
          <img src={Category2} alt="" />
          <p className="text-indigo-500 font-medium text-xl">Yoga</p>
        </span>
        <span className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 bg-green-100 hover:bg-white  transition ease-in duration-700">
          <img src={Category3} alt="" />
          <p className="text-center text-green-500 font-medium text-xl">
            {" "}
            Farkındalık
          </p>
        </span>
        <span className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 bg-blue-100 hover:bg-white  transition ease-in duration-700">
          <img src={Category4} alt="" />
          <p className="text-center text-blue-500 font-medium text-xl">Uyku</p>
        </span>
        <span className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 bg-yellow-100 hover:bg-white  transition ease-in duration-700">
          <img src={Category5} alt="" />
          <p className="text-center text-yellow-500 font-medium text-xl">
            Mutfak
          </p>
        </span>
        <span className="flex flex-col items-center justify-center border border-gray-100 rounded-2xl p-6 bg-red-100 hover:bg-white  transition ease-in duration-700">
          <img src={Category6} alt="" />
          <p className="text-center text-red-700 font-medium text-xl">Atölye</p>
        </span>
      </div>
    </div>
  );
};

export default Category;
