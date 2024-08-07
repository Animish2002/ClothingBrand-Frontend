import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import "../assets/styles/Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Layout>
      <div className="flex justify-center md:p-[60px]">
        <div className="w-[400px] h-auto">
          <form className="p-4 register-form">
            <h1 className="text-2xl mt-2 text-center mb-6 font-bold">Log in</h1>

            <div className="flex flex-col items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[300px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <div className="relative w-[300px]">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="border placeholder:italic pl-5 pr-10 border-2 rounded-xl w-full p-[5px] hover:border-indigo-500 focus:border-indigo-500"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash className="w-8 text-indigo-500" /> : <FaEye className="w-8  text-indigo-500"/>}
                </div>
              </div>
            </div>
            <div className="flex justify-center py-4 gap-4">
              <button className="border border-2 border-indigo-400 w-[150px] p-[5px] rounded-[30px] text-black bg-gray hover:bg-indigo-900 hover:text-white">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
