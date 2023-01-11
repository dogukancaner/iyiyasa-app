import React, { useState } from "react";
import Logo1 from "../img/logo1.png";
import Logo2 from "../img/logo2.png";

import { Link } from "react-router-dom";

const Navbar = ({ users }) => {
  const [showMenu, setShowMenu] = useState("");

  return (
    <div className="container mx-auto relative">
      <div className="py-4 mx-4 md:mx-6">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4">
          <Link to="/" className="flex gap-4">
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
          </Link>
          <div className="md:hidden cursor-pointer"></div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  to="/instructor"
                  className="text-gray-600 hover:text-gray-400  duration-300 font-medium text-lg"
                >
                  Eğitmenler
                </Link>
              </li>
              <li>
                <Link
                  to="/specialseries"
                  className="text-gray-600 hover:text-gray-400 duration-300  font-medium text-lg"
                >
                  Özel Seriler
                </Link>
              </li>
              <li>
                <Link
                  to="/specialme"
                  className="text-gray-600 hover:text-gray-400 duration-300  font-medium text-lg"
                >
                  Bana Özel
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-gray-400 duration-300  font-medium  text-lg"
                >
                  İyi Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link aria-label="Hesabım" to="/signin">
              <svg
                className=" text-gray-600  "
                width={24}
                height={24}
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
            </Link>

            <Link aria-label="Sepet" to="/pricing">
              <svg
                className=" text-gray-600"
                width={24}
                height={24}
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
            </Link>
            <div>
              <span className="font-bold ml-2">{users?.email}</span>
            </div>
          </div>
          <div className="md:hidden">
            <button
              aria-label="open menu"
              onClick={() => setShowMenu(true)}
              className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
            >
              <svg
                className="text-gray-600"
                width={32}
                height={32}
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
        {/* <div className="mt-4 pb-4 flex gap-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <svg
                className="text-gray-600"
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
          </div> */}
      </div>
      <div
        id="mobile-menu"
        className={`${
          showMenu ? "flex" : "hidden"
        } md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-6`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between border-b border-gray-600 pb-3 mx-4">
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="flex gap-4 "
            >
              <img className="" src={Logo1} alt="" />
              <img src={Logo2} alt="" />
            </Link>
            <button
              aria-label="close menu"
              onClick={() => setShowMenu(false)}
              className="text-black focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <svg
                className="fill-stroke"
                width={24}
                height={24}
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
          <ul className="flex flex-col gap-4">
            <li className="border-b border-black pb-4 px-1 flex items-center justify-center">
              <Link
                to="/instructor"
                onClick={() => setShowMenu(false)}
                className="font-medium text-lg text-gray-800 hover:text-gray-400 duration-300  "
              >
                Eğitmenler
              </Link>
            </li>
            <li className="border-b border-black pb-4 px-1 flex items-center justify-center">
              <Link
                to="/specialseries"
                onClick={() => setShowMenu(false)}
                className="font-medium text-lg text-gray-800 hover:text-gray-400 duration-300  "
              >
                Özel Seriler
              </Link>
            </li>
            <li className="border-b border-black pb-4 px-1 flex items-center justify-center">
              <Link
                to="/specialme"
                onClick={() => setShowMenu(false)}
                className="font-medium text-lg text-gray-800 hover:text-gray-400 duration-300 "
              >
                Bana Özel
              </Link>
            </li>
            <li className="border-b border-black pb-4 px-1 flex items-center justify-center">
              <Link
                to="/blog"
                onClick={() => setShowMenu(false)}
                className="font-medium text-lg text-gray-800 hover:text-gray-400 duration-300"
              >
                İyi Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-full flex items-start">
          <ul className=" bg-gray-200 p-12 mt-4 flex flex-row justify-center gap-5 w-full">
            <li>
              <Link
                className="flex items-center gap-2 "
                to="/signin"
                onClick={() => setShowMenu(false)}
              >
                <div>
                  <svg
                    className=""
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
                <p className="font-medium text-gray-800 ">{users.email}</p>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2"
                to="/pricing"
                onClick={() => setShowMenu(false)}
              >
                <div>
                  <svg
                    className=""
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
                <p className="font-medium text-gray-800">Alışveriş</p>
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
