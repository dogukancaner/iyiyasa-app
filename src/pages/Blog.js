import React, { useState } from "react";
const Blog = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="mx-auto container p-4">
        <div className="md:flex justify-between ">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Bloglarımız</h1>
          </div>
          <div className="mb-4 pb-4 flex gap-4 border-b  border-gray-700">
            <div className="cursor-pointer ">
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
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 ">
          <div className="hover:scale-95 transition duration-300 ease-in-out cursor-pointer">
            <img
              className="w-full "
              src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
              alt="computer"
            />
            <div className="py-4 px-8 w-full flex justify-between bg-gray-700">
              <p className="text-sm text-white font-semibold">Blog Sahibi</p>
              <p className="text-sm text-white font-semibold">Tarih</p>
            </div>
            <div className="bg-white px-10 py-6 border border-gray-400 rounded-bl-3xl rounded-br-3xl">
              <h1 className="text-4xl text-gray-900 font-semibold ">Başlık</h1>
              <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 mt-6 w-11/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                non sapiente ratione molestias, ad temporibus quae impedit,
                consequuntur officia natus molestiae nihil. Eaque illum ratione
                ea repellat obcaecati nesciunt dicta amet maiores a? Voluptates,
                ipsa.
              </p>
              <div className="w-full mt-4 justify-end flex items-center cursor-pointer hover:scale-95 transition duration-300 ease-in-out">
                <p className="text-base  text-gray-500">Daha Fazla</p>
                <svg
                  className="ml-3 lg:ml-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={18}
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                    stroke="#243763"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 8.53662H19"
                    stroke="#243763"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div className="hover:scale-95 transition duration-300 ease-in-out cursor-pointer">
                <img
                  className="w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                  alt="games"
                />
                <div className="py-2 px-4 w-full flex justify-between bg-gray-700">
                  <p className="text-sm text-white font-semibold ">
                    Blog Sahibi
                  </p>
                  <p className="text-sm text-white font-semibold ">Tarih</p>
                </div>
                <div className="bg-white px-3 border border-gray-400  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-lg text-gray-900 font-semibold ">
                    Başlık
                  </h1>
                  <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4  mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor itaque voluptatibus necessitatibus quasi assumenda
                    illum quia suscipit placeat cum accusantium.
                  </p>
                </div>
              </div>
              <div className="hover:scale-95 transition duration-300 ease-in-out cursor-pointer">
                <img
                  className="w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
                  alt="notes"
                />
                <div className="py-2 px-4 w-full flex justify-between bg-gray-700">
                  <p className="text-sm text-white font-semibold ">
                    Blog Sahibi
                  </p>
                  <p className="text-sm text-white font-semibold ">Tarih</p>
                </div>
                <div className="bg-white px-3 border border-gray-400  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-lg text-gray-900 font-semibold ">
                    Başlık
                  </h1>
                  <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4  mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quaerat consequatur quo aspernatur iusto, in officiis unde
                    qui eligendi recusandae officia?
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div className="hover:scale-95 transition duration-300 ease-in-out cursor-pointer">
                <img
                  className="w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                  alt="laptop"
                />
                <div className="py-2 px-4 w-full flex justify-between bg-gray-700">
                  <p className="text-sm text-white font-semibold ">
                    Blog Sahibi
                  </p>
                  <p className="text-sm text-white font-semibold ">Tarih</p>
                </div>
                <div className="bg-white px-3 border border-gray-400  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-lg text-gray-900 font-semibold ">
                    Başlık
                  </h1>
                  <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4  mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum sapiente porro iusto exercitationem ratione vel
                    neque molestias ab laudantium necessitatibus!
                  </p>
                </div>
              </div>
              <div className="hover:scale-95 transition duration-300 ease-in-out cursor-pointer">
                <img
                  className="w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                  alt="worker"
                />
                <div className="py-2 px-4 w-full flex justify-between bg-gray-700">
                  <p className="text-sm text-white font-semibold ">
                    Blog Sahibi
                  </p>
                  <p className="text-sm text-white font-semibold ">Tarih</p>
                </div>
                <div className="bg-white px-3 lg:px-6 border border-gray-400 py-4 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-lg text-gray-900 font-semibold ">
                    Başlık
                  </h1>
                  <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4  mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt commodi magnam, similique veniam accusantium
                    aperiam quo totam voluptate placeat officia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
