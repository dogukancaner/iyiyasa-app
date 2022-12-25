import React from "react";
import Logo1 from "./img/logo1.png";
import Logo2 from "./img/logo2.png";
import Search from "./img/search.png";
import Fitness from "./img/fitness.png";
import OzelSeri from "./img/ozel-seri.png";
import BanaOzel from "./img/bana-ozel.png";
import IyıBlog from "./img/iyi-blog.png";

import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center p-2 border-b-2">
      <div className="flex p-4">
        <img className="mr-4 w-full h-full" src={Logo1} alt="" />
        <img className="mr-4 w-full h-full" src={Logo2} alt="" />
      </div>
      <div>
        <ul className="flex justify-center items-center">
          <li className="p-2 flex mr-4 mt-2">
            <input type="search" placeholder="Ara" className="border-b-2 " />
            <img className="w-full h-full " src={Search} alt="" />
          </li>
          <li className="flex flex-col items-center justify-center text-center mr-8">
            <img src={Fitness} alt="" />
            <p className="text-md font-medium mt-1">Eğitmenler</p>
          </li>
          <li className="flex flex-col items-center justify-center text-center mr-8">
            <img src={OzelSeri} alt="" />
            <p className="text-md font-medium mt-1">Özel Seriler</p>
          </li>
          <li className="flex flex-col items-center justify-center text-center mr-8">
            <img src={BanaOzel} alt="" />
            <p className="text-md font-medium mt-1">Bana Özel</p>
          </li>
          <li className="flex flex-col items-center justify-center text-center mr-8">
            <img src={IyıBlog} alt="" />
            <p className="text-md font-medium mt-1">İyi Blog</p>
          </li>

          <li className="text-center mr-14 flex">
            <span className="mt-2">Merhaba,</span>
            <span className=" mt-2 flex justify-center items-center w-full  ml-2">
              İyi Yaşa'lı
              <BiChevronDown size={25} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
