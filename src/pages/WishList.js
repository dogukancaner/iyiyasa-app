import React from "react";

const wishListObject = [
  {
    title: "Element Yogası Serisi",
    instructor: "Ali Can",
    category: "Yoga",
    price: "Ücretsiz",
  },
  {
    title: "10 Günde Yağ Yak",
    instructor: "Ali Can",
    category: "Fitness",
    price: "Ücretsiz",
  },
  {
    title: "Duruş Bozukluğuna Yönelik Egzersizler",
    instructor: "Ali Can",
    category: "Fitness",
    price: "Ücretsiz",
  },
  {
    title: "Element Yogası Serisi",
    instructor: "Ali Can",
    category: "Yoga",
    price: "Ücretsiz",
  },
  {
    title: "10 Günde Yağ Yak",
    instructor: "Ali Can",
    category: "Fitness",
    price: "Ücretsiz",
  },
  {
    title: "Duruş Bozukluğuna Yönelik Egzersizler",
    instructor: "Ali Can",
    category: "Fitness",
    price: "Ücretsiz",
  },
];

const WishList = () => {
  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="grid grid-cols-5 text-xl font-medium bg-gray-300 rounded-lg p-4 gap-6">
        <div>Ders</div>
        <div>Eğitmen</div>
        <div>Kategori</div>
        <div>Ücret</div>
      </div>
      {wishListObject.map((item, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-5 mt-2 border border-gray-700 rounded-lg p-4 cursor-pointer hover:scale-105 transition duration-300 ease-in-out  "
          >
            <div className="text-gray-600   font-medium text-lg mt-4 mb-2">
              {item.title}
            </div>
            {/* <img
              src={item.image}
              alt="discover-content"
              className=" w-40 h-40 rounded-lg"
            /> */}
            <div className="text-gray-600  font-medium text-lg mt-4 mb-2">
              {item.instructor}
            </div>
            <div className="text-gray-600 font-medium text-lg mt-4 mb-2">
              {item.category}
            </div>
            <div className="text-gray-600 font-medium text-lg mt-4 mb-2">
              {item.price}
            </div>
            <div className="text-gray-600 font-medium text-lg mt-4 mb-2">
              Favoriden Çıkar
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishList;
