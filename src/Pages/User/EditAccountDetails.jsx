import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "../../assets/styles/Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const EditAccountDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    pinCode: "",
    password: "",
    confirmPassword: "",
  });

  const onClickCancel = () => {
    setFormData({
      name: "",
      email: "",
      address: "",
      pinCode: "",
      password: "",
      confirmPassword: "",
    });
  };

  const [viewPassword, setViewPassword] = useState(false);
  const [confirmviewPassword, setConfirmviewPassword] = useState(false);

  const handlePasswordView = () => {
    setViewPassword(!viewPassword);
  };

  const handlePasswordView2 = () => {
    setConfirmviewPassword(!confirmviewPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex justify-center md:p-[60px]">
        <div className="w-[400px] h-auto">
          <form className="p-4 register-form">
            <h1 className="text-2xl mt-2 text-center mb-6 font-bold">
              Edit Account
            </h1>

            <div className="flex flex-col items-center gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="pl-5 border placeholder:italic border-2 rounded-xl w-[300px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <input
                type="text"
                name="email"
                disabled
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[300px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[300px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />
              <input
                type="number"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Pin Code"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[300px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />
              <div className="relative w-[300px]">
                <input
                  type={viewPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="border placeholder:italic pl-5 pr-10 border-2 rounded-xl w-full p-[5px] hover:border-indigo-500 focus:border-indigo-500"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handlePasswordView}
                >
                  {viewPassword ? (
                    <FaEyeSlash className="w-5 h-5 text-indigo-500" />
                  ) : (
                    <FaEye className="w-5 h-5 text-indigo-500" />
                  )}
                </div>
              </div>
              <div className="relative w-[300px]">
                <input
                  type={confirmviewPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="border placeholder:italic pl-5 pr-10 border-2 rounded-xl w-full p-[5px] hover:border-indigo-500 focus:border-indigo-500"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={handlePasswordView2}
                >
                  {confirmviewPassword ? (
                    <FaEyeSlash className="w-5 h-5 text-indigo-500" />
                  ) : (
                    <FaEye className="w-5 h-5 text-indigo-500" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center py-4 gap-4">
              <button
                type="submit"
                className="border border-2 border-indigo-300 w-[120px] p-[5px] rounded-[30px] text-black bg-gray hover:bg-indigo-900 hover:text-white"
              >
                Update
              </button>
              <button
                type="button"
                className="border border-2 border-red-300 w-[120px] p-[5px] rounded-[30px] bg-gray hover:bg-red-400"
                onClick={onClickCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default EditAccountDetails;
