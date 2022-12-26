import React from "react";
import Logo1 from "./img/logo1.png";
import Logo2 from "./img/logo2.png";
import { BsSearch } from "react-icons/bs";
import Search from "./img/search.png";
import Fitness from "./img/fitness.png";
import OzelSeri from "./img/ozel-seri.png";
import BanaOzel from "./img/bana-ozel.png";
import IyıBlog from "./img/iyi-blog.png";

import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className=" container mx-auto grid grid-cols-4 gap-4 border-b-2 pb-4">
      <div className="flex justify-end items-center pt-2">
        <img className="mr-4" src={Logo1} alt="" />
        <img src={Logo2} alt="" />
      </div>
      <div className="flex relative justify-between items-center pt-6 m-2 p-2  ">
        <input
          type="text"
          placeholder="Ara"
          className="w-full   h-10 rounded-md border-b-2 border-black p-2 focus:outline-none focus:ring-2 focus:ring-black  mr-2"
        />
        <BsSearch className="absolute right-8" size={25} />
      </div>
      <div className="flex flex-col justify-center items-center pt-6 ">
        <ul className="flex gap-6 ">
          <li className="flex flex-col items-center justify-start text-center">
            <img src={Fitness} alt="" />
            <p className="text-md font-medium mt-1">Eğitmenler</p>
          </li>
          <li className="flex flex-col items-center justify-start text-center  ">
            <img src={OzelSeri} alt="" />
            <p className="text-md font-medium mt-1">Özel Seriler</p>
          </li>
          <li className="flex flex-col items-center justify-start text-center ">
            <img src={BanaOzel} alt="" />
            <p className="text-md font-medium mt-1">Bana Özel</p>
          </li>
          <li className="flex flex-col items-center justify-start text-center">
            <img src={IyıBlog} alt="" />
            <p className="text-md font-medium mt-1">İyi Blog</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center pt-10 ">
        <ul>
          <li className="text-center mr-20 flex font-medium ">
            <span className="mt-2 text-md">Merhaba,</span>
            <button className=" mt-2 font-bold flex justify-center items-center w-full  ml-2 text-md">
              İyi Yaşa'lı
              <BiChevronDown size={25} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
