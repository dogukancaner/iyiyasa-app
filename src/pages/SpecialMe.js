import React from "react";
function index() {
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
      title: "İdeal Kilo Nasıl Korunur?",
      instructor: "Diyetkolik",
      category: "Mutfak",
    },
  ];
  const historyObject = [
    {
      title: "Sumo Squat Nasıl Yapılır?",
      instructor: "Halil Kılıç",
      category: "Fitness",
    },
    {
      title: "Curtsy Lunge Nasıl Yapılır?",
      instructor: "Verda Kutsal",
      category: "Fitness",
    },
    {
      title: "Mağarada Güçlen 2 (AMRAP)",
      instructor: "Tuğrul Çağrı Yılmazer",
      category: "Fitness",
    },
  ];

  return (
    <div className="container mx-auto p-4 h-screen ">
      <div className="mb-4">
        <h1 className="text-2xl font-medium ">Bana Özel</h1>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1  mb-2 gap-2 ">
        <div>
          <div className=" p-4 text-xl font-medium border border-gray-400 rounded-lg">
            Geçmişte İzlediklerim
          </div>
          <div>
            {historyObject.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 mb-2 mt-2 bg-gray-300 rounded-2xl  hover:scale-90 transition duration-300"
              >
                <div className="p-4">{item.title}</div>
                <div className="p-4">{item.instructor}</div>
                <div className="p-4">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="p-4 text-xl font-medium  border border-gray-400 rounded-lg">
            Favorilerim
          </div>
          <div>
            {wishListObject.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 mb-2 mt-2 bg-gray-300 rounded-2xl hover:scale-90 transition duration-300 "
              >
                <div className="p-4">{item.title}</div>
                <div className="p-4">{item.instructor}</div>
                <div className="p-4">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
