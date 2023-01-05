import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SıgnUp = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };
  const authFunc = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );
      if (result.user) {
        window.location = "/home";
      }
    } catch (error) {
      console.log(error);
    }
  };

  const useEnterKeyListener = (e) => {
    if (e.key === "Enter") {
      authFunc();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className=" flex items-center justify-center">
        <div className="max-w-lg w-full flex flex-col">
          <h2 className="text-center pb-4 font-bold text-2xl">Kayıt Ol</h2>
          <input
            name="email"
            onChange={onChangeFunc}
            value={authData.email}
            className="p-2.5 m-2 outline-none text-base border border-solid border-gray-300 rounded-md "
            type="email"
            placeholder="E-mail Giriniz"
          />
          <input
            name="password"
            onChange={onChangeFunc}
            value={authData.password}
            className="p-2.5 m-2 outline-none text-base border border-solid border-gray-300 rounded-md"
            type="password"
            placeholder="Parola Giriniz"
            onKeyDown={useEnterKeyListener}
          />

          <button
            onClick={authFunc}
            className="border border-solid p-2 text-lg text-center rounded-2xl mt-2 bg-blue-600 cursor-pointer text-white "
          >
            Kayıt Ol
          </button>
        </div>
      </div>
    </div>
  );
};

export default SıgnUp;
