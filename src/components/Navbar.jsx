import React, { useState } from "react";
import Logo1 from "../img/logo1.png";
import Logo2 from "../img/logo2.png";

export default function Index() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="dark:bg-white">
      <div className="container mx-auto relative">
        <div className="py-4 mx-4 md:mx-6">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4">
            <div className="flex gap-4 ">
              <img className="" src={Logo1} alt="" />
              <img src={Logo2} alt="" />
            </div>
            <div className="md:hidden cursor-pointer"></div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-12">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black font-medium text-lg"
                  >
                    {" "}
                    Eğitmenler{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black font-medium text-lg"
                  >
                    {" "}
                    Özel Seriler{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black font-medium text-lg"
                  >
                    {" "}
                    Bana Özel{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-black font-medium  text-lg"
                  >
                    {" "}
                    İyi Blog{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a aria-label="Hesabım" href="javascript:void(0)">
                <svg
                  className="fill-stroke text-gray-800 dark:text-black"
                  width={18}
                  height={20}
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a aria-label="Favoriler" href="javascript:void(0)">
                <svg
                  className="fill-stroke text-gray-800 dark:text-black"
                  width={22}
                  height={20}
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4578 2.59133C18.9691 2.08683 18.3889 1.68663 17.7503 1.41358C17.1117 1.14054 16.4272 1 15.7359 1C15.0446 1 14.3601 1.14054 13.7215 1.41358C13.0829 1.68663 12.5026 2.08683 12.0139 2.59133L10.9997 3.63785L9.98554 2.59133C8.99842 1.57276 7.6596 1.00053 6.26361 1.00053C4.86761 1.00053 3.52879 1.57276 2.54168 2.59133C1.55456 3.6099 1 4.99139 1 6.43187C1 7.87235 1.55456 9.25383 2.54168 10.2724L3.55588 11.3189L10.9997 19L18.4436 11.3189L19.4578 10.2724C19.9467 9.76814 20.3346 9.16942 20.5992 8.51045C20.8638 7.85148 21 7.14517 21 6.43187C21 5.71857 20.8638 5.01225 20.5992 4.35328C20.3346 3.69431 19.9467 3.09559 19.4578 2.59133V2.59133Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a aria-label="Sepet" href="javascript:void(0)">
                <svg
                  className="fill-stroke text-gray-800 dark:text-black"
                  width={20}
                  height={22}
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 5H19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="md:hidden">
              <button
                aria-label="open menu"
                onClick={() => setShowMenu(true)}
                className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
              >
                <svg
                  className="fill-stroke text-gray-800 dark:text-black"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-4 pb-4 flex space-x-3 border-b border-gray-200 dark:border-gray-700">
            <div>
              <svg
                className="fill-stroke text-gray-600  dark:text-black"
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
              className="focus:outline-none bg-transparent text-sm text-gray-600"
            />
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            showMenu ? "flex" : "hidden"
          }  md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-6`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4">
              <div className="flex gap-4 ">
                <img className="" src={Logo1} alt="" />
                <img src={Logo2} alt="" />
              </div>
              <button
                aria-label="close menu"
                onClick={() => setShowMenu(false)}
                className="text-black focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-4 mx-4">
            <ul className="flex flex-col space-y-4">
              <li className="border-b border-black pb-4 px-1 flex items-center justify-between">
                <a href="javascript:void(0)" className="text-black  text-lg ">
                  {" "}
                  Eğitmenler{" "}
                </a>
                <button aria-label="Add" className="text-black rounded ">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-black pb-4 px-1 flex items-center justify-between">
                <a href="javascript:void(0)" className="text-black text-lg ">
                  {" "}
                  Özel Seriler{" "}
                </a>
                <button aria-label="Add" className="text-black  rounded ">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-black pb-4 px-1 flex items-center justify-between">
                <a href="javascript:void(0)" className="text-black text-lg ">
                  {" "}
                  Bana Özel{" "}
                </a>
                <button aria-label="Add" className="text-black rounded ">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-black pb-4 px-1 flex items-center justify-between">
                <a href="javascript:void(0)" className="text-black  text-lg">
                  {" "}
                  İyi Blog{" "}
                </a>
                <button aria-label="Add" className="text-black  rounded ">
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex items-start">
            <ul className=" bg-gray-200 p-12 mt-4 flex flex-row justify-center gap-4 w-full">
              <li>
                <a
                  className="flex items-center gap-2"
                  href="javascript:void(0)"
                >
                  <div>
                    <svg
                      className="fill-stroke"
                      width={18}
                      height={20}
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base">Hesabım</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2"
                  href="javascript:void(0)"
                >
                  <div>
                    <svg
                      className="fill-stroke"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 5H21"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base">Sepetim</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 "
                  href="javascript:void(0)"
                >
                  <div>
                    <svg
                      className="fill-stroke"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base">Favorilerim</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from "react";
// import Logo1 from "../img/logo1.png";
// import Logo2 from "../img/logo2.png";
// import { BsSearch } from "react-icons/bs";
// import Fitness from "../img/fitness.png";
// import OzelSeri from "../img/ozel-seri.png";
// import BanaOzel from "../img/bana-ozel.png";
// import IyıBlog from "../img/iyi-blog.png";

// import { BiChevronDown } from "react-icons/bi";

// const Navbar = () => {
//   return (
//     <div className=" container mx-auto grid grid-cols-4 gap-4 border-b-2 pb-4">
//       <div className="flex justify-end items-center pt-2">
//         <img className="mr-4" src={Logo1} alt="" />
//         <img src={Logo2} alt="" />
//       </div>
//       <div className="flex relative justify-between items-center pt-6 m-2 p-2  ">
//         <input
//           type="text"
//           placeholder="Ara"
//           className="w-full   h-10 rounded-md border-b-2 border-black p-2 focus:outline-none focus:ring-2 focus:ring-black  mr-2"
//         />
//         <BsSearch className="absolute right-8" size={25} />
//       </div>
//       <div className="flex flex-col justify-center items-center pt-6 ">
//         <ul className="flex gap-6 ">
//           <li className="flex flex-col items-center justify-start text-center">
//             <img src={Fitness} alt="" />
//             <p className="text-md font-medium mt-1">Eğitmenler</p>
//           </li>
//           <li className="flex flex-col items-center justify-start text-center  ">
//             <img src={OzelSeri} alt="" />
//             <p className="text-md font-medium mt-1">Özel Seriler</p>
//           </li>
//           <li className="flex flex-col items-center justify-start text-center ">
//             <img src={BanaOzel} alt="" />
//             <p className="text-md font-medium mt-1">Bana Özel</p>
//           </li>
//           <li className="flex flex-col items-center justify-start text-center">
//             <img src={IyıBlog} alt="" />
//             <p className="text-md font-medium mt-1">İyi Blog</p>
//           </li>
//         </ul>
//       </div>
//       <div className="flex justify-center items-center pt-10 ">
//         <ul>
//           <li className="text-center mr-20 flex font-medium ">
//             <span className="mt-2 text-md">Merhaba,</span>
//             <button className=" mt-2 font-bold flex justify-center items-center w-full  ml-2 text-md">
//               İyi Yaşa'lı
//               <BiChevronDown size={25} />
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
