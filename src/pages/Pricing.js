import React from "react";

const Pricing = () => {
  return (
    <div className="mx-auto container p-4 py-42 ">
      <div className="lg:flex items-center justify-between">
        <div className=" lg:w-1/2 w-full">
          <p className="text-base leading-4 text-gray-600">Planınızı Seçin.</p>
          <h1 className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
            Fiyatlandırma Planımız
          </h1>

          <div className="w-40">
            <div className="bg-gray-100 shadow rounded-full flex items-center justify-center mt-10">
              <button
                className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none  leading-none text-black font-medium rounded-full py-4 px-6 mr-1"
                id="monthly"
              >
                Aylık
              </button>
              <button
                className="bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none  leading-none text-black font-medium rounded-full py-4 px-6"
                id="annually"
              >
                Yıllık
              </button>
            </div>
          </div>
        </div>
        <div
          className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
          role="list"
        >
          <div className="bg-gray-200 cursor-pointer shadow rounded-lg p-8 relative z-30 hover:scale-105 transition duration-300">
            <div className="md:flex items-center justify-between  ">
              <h2 className="text-2xl font-medium leading-6 text-gray-800">
                Başlangıç
              </h2>
              <p className="text-2xl font-medium  md:mt-0 mt-4 leading-6 text-gray-800">
                0₺
              </p>
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
              Paket Özellikleri
            </p>
          </div>
          <div className="bg-gray-200 cursor-pointer shadow rounded-lg mt-3 flex relative z-30 hover:scale-105 transition duration-300">
            <div className="w-2.5  h-auto bg-gray-800 rounded-tl-md rounded-bl-md" />
            <div className="w-full p-8">
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-medium leading-6 text-gray-800">
                  Orta
                </h2>
                <p className="text-2xl font-medium md:mt-0 mt-4  leading-6 text-gray-800">
                  49.99₺
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                Paket Özellikleri
              </p>
            </div>
          </div>
          <div className="bg-gray-200 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7 hover:scale-105 transition duration-300">
            <div className="md:flex items-center justify-between">
              <h2 className="text-2xl font-medium leading-6 text-gray-800">
                İleri Seviye
              </h2>
              <p className="text-2xl md:mt-0 mt-4 font-medium leading-6 text-gray-800">
                89.99₺
              </p>
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
              Paket Özellikleri
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
