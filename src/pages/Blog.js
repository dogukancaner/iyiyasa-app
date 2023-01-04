// import React from "react";

// const Blog1 = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
//         <div className="flex flex-col items-center justify-center">
//           <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
//             Haftanın Blogları
//           </h1>
//           <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
//             Rastgele paragraflar arıyorsanız, doğru yere geldiniz. Rastgele bir
//             kelime veya rastgele bir cümle yeterli olmadığında..
//           </p>
//         </div>
//         <div className="lg:flex items-stretch md:mt-12 mt-8">
//           <div className="lg:w-1/2">
//             <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
//               <div className="sm:w-1/2 relative">
//                 <div>
//                   <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                     12 April 2021
//                   </p>
//                   <div className="absolute bottom-0 left-0 p-6">
//                     <h2 className="text-xl font-semibold 5 text-white">
//                       The Decorated Ways
//                     </h2>
//                     <p className="text-base leading-4 text-white mt-2">
//                       Dive into minimalism
//                     </p>
//                     <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                       <p className="pr-2 text-sm font-medium leading-none">
//                         Read More
//                       </p>
//                       <svg
//                         className="fill-stroke"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M5.75 12.5L10.25 8L5.75 3.5"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   src="https://i.ibb.co/DYxtCJq/img-1.png"
//                   className="w-full"
//                   alt="chair"
//                 />
//               </div>
//               <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
//                 <div>
//                   <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                     12 April 2021
//                   </p>
//                   <div className="absolute bottom-0 left-0 p-6">
//                     <h2 className="text-xl font-semibold 5 text-white">
//                       The Decorated Ways
//                     </h2>
//                     <p className="text-base leading-4 text-white mt-2">
//                       Dive into minimalism
//                     </p>
//                     <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                       <p className="pr-2 text-sm font-medium leading-none">
//                         Read More
//                       </p>
//                       <svg
//                         className="fill-stroke"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M5.75 12.5L10.25 8L5.75 3.5"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   src="https://i.ibb.co/3C5HvxC/img-2.png"
//                   className="w-full"
//                   alt="wall design"
//                 />
//               </div>
//             </div>
//             <div className="relative">
//               <div>
//                 <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                   12 April 2021
//                 </p>
//                 <div className="absolute bottom-0 left-0 md:p-10 p-6">
//                   <h2 className="text-xl font-semibold 5 text-white">
//                     The Decorated Ways
//                   </h2>
//                   <p className="text-base leading-4 text-white mt-2">
//                     Dive into minimalism
//                   </p>
//                   <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                     <p className="pr-2 text-sm font-medium leading-none">
//                       Read More
//                     </p>
//                     <svg
//                       className="fill-stroke"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M5.75 12.5L10.25 8L5.75 3.5"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <img
//                 src="https://i.ibb.co/Ms4qyXp/img-3.png"
//                 alt="sitting place"
//                 className="w-full mt-8 md:mt-6 hidden sm:block"
//               />
//               <img
//                 className="w-full mt-4 sm:hidden"
//                 src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
//                 alt="sitting place"
//               />
//             </div>
//           </div>
//           <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
//             <div className="relative">
//               <div>
//                 <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                   12 April 2021
//                 </p>
//                 <div className="absolute bottom-0 left-0 md:p-10 p-6">
//                   <h2 className="text-xl font-semibold 5 text-white">
//                     The Decorated Ways
//                   </h2>
//                   <p className="text-base leading-4 text-white mt-2">
//                     Dive into minimalism
//                   </p>
//                   <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                     <p className="pr-2 text-sm font-medium leading-none">
//                       Read More
//                     </p>
//                     <svg
//                       className="fill-stroke"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M5.75 12.5L10.25 8L5.75 3.5"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <img
//                 src="https://i.ibb.co/6Wfjf2w/img-4.png"
//                 alt="sitting place"
//                 className="w-full sm:block hidden"
//               />
//               <img
//                 className="w-full sm:hidden"
//                 src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
//                 alt="sitting place"
//               />
//             </div>
//             <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
//               <div className="relative w-full">
//                 <div>
//                   <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                     12 April 2021
//                   </p>
//                   <div className="absolute bottom-0 left-0 p-6">
//                     <h2 className="text-xl font-semibold 5 text-white">
//                       The Decorated Ways
//                     </h2>
//                     <p className="text-base leading-4 text-white mt-2">
//                       Dive into minimalism
//                     </p>
//                     <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                       <p className="pr-2 text-sm font-medium leading-none">
//                         Daha Fazla
//                       </p>
//                       <svg
//                         className="fill-stroke"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M5.75 12.5L10.25 8L5.75 3.5"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   src="https://i.ibb.co/3yvZBpm/img-5.png"
//                   className="w-full"
//                   alt="chair"
//                 />
//               </div>
//               <div className="relative w-full sm:mt-0 mt-4">
//                 <div>
//                   <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
//                     12 April 2021
//                   </p>
//                   <div className="absolute bottom-0 left-0 p-6">
//                     <h2 className="text-xl font-semibold 5 text-white">
//                       The Decorated Ways
//                     </h2>
//                     <p className="text-base leading-4 text-white mt-2">
//                       Dive into minimalism
//                     </p>
//                     <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
//                       <p className="pr-2 text-sm font-medium leading-none">
//                         Daha Fazla
//                       </p>
//                       <svg
//                         className="fill-stroke"
//                         width="16"
//                         height="16"
//                         viewBox="0 0 16 16"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M5.75 12.5L10.25 8L5.75 3.5"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   src="https://i.ibb.co/gDdnJb5/img-6.png"
//                   className="w-full"
//                   alt="wall design"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog1;
import React from "react";

export default function Home() {
  return (
    <>
      <div className="py-24 flex-col items-center justify-center  px-4">
        <h1
          role="heading"
          className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-gray-800"
        >
          Read Our Latest
        </h1>
        <p
          role="contentinfo"
          className="text-base leading-normal text-center text-gray-600 mt-4"
        >
          Whether article spirits new her covered hastily sitting her. Money
          witty books nor son
        </p>
        <div className="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6">
          <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            <div>
              <img
                src="https://i.ibb.co/hKV7YhC/blog-1.png"
                alt="woman smiling"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Busting myths about hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
            <div className="lg:mt-10">
              <img
                src="https://i.ibb.co/WkCydhJ/blog-4.png"
                alt="coffe pouring"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Busting myths about hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
          </div>
          <div className="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
            <div>
              <img
                src="https://i.ibb.co/SmNSVs8/blog-2.png"
                alt="plant held by a man"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Busting myths about hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
            <div className="lg:mt-10">
              <img
                src="https://i.ibb.co/3pMc5WS/blog-5.png"
                alt="lady with plant"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Busting myths about hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
          </div>
          <div className="flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
            <div>
              <img
                src="https://i.ibb.co/TLJdmSt/new-img-2.png"
                alt="Delighful breakfast"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Busting myths about hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
            <div className="xl:mt-10">
              <img
                src="https://i.ibb.co/c8dPSYB/blog-6.png"
                alt="hats with image frame in middle"
              />
              <h2 className="text-xl font-semibold leading-5 mt-8 text-gray-800">
                Busting myths about hair
              </h2>
              <div className="mt-6 flex items-center cursor-pointer">
                <p className="pr-3 text-base font-medium leading-4 underline text-gray-800">
                  5 min read
                </p>
                <svg
                  width={16}
                  height={10}
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5H15"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 9L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 1L15 5"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base mt-4 italic font-italic leading-4 text-gray-600">
                23, Feburary 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
