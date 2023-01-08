import React from "react";

const wishListObject = [
  {
    title: "Element Yogası Serisi",
    instructor: "Ayşe Aşçı",
    category: "Yoga",
  },
  {
    title: "10 Günde Yağ Yak",
    instructor: "Adil Ayvaz",
    category: "Fitness",
  },
  {
    title: "Duruş Bozukluğuna Yönelik Egzersizler",
    instructor: "Ali Can",
    category: "Fitness",
  },
  {
    title: "Element Yogası Serisi",
    instructor: "Ali Can",
    category: "Yoga",
  },
  {
    title: "10 Günde Yağ Yak",
    instructor: "Ali Can",
    category: "Fitness",
  },
  {
    title: "Duruş Bozukluğuna Yönelik Egzersizler",
    instructor: "Ali Can",
    category: "Fitness",
  },
];

const WishList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 text-xl font-medium bg-gray-300 rounded-lg p-4 ">
        <div>Ders</div>
        <div>Eğitmen</div>
        <div>Kategori</div>
      </div>
      {wishListObject.map((item, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-3 mt-2 border border-gray-700 rounded-lg p-4 cursor-pointer hover:scale-105 transition duration-300 ease-in-out  "
          >
            <div className="text-gray-600   font-medium text-md mt-4 mb-2">
              {item.title}
            </div>
            <div className="text-gray-600  font-medium text-md mt-4 mb-2">
              {item.instructor}
            </div>
            <div className="text-gray-600 font-medium text-md mt-4 mb-2">
              {item.category}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WishList;
