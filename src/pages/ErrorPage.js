import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto p-4 py-20 h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">Sayfa Bulunamadı</h2>
        <Link to="/">
          <button className="bg-blue-600 text-white p-2 rounded-lg mt-4 mb-4">
            Anasayfaya Dön
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
