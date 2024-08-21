import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import "../assets/styles/Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const NewRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: {
      address1: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
    },
  });

const onClickCancel = () => {
    setFormData({
      name: "",
      email: "",
      address1: "",
      city: "",
      state: "",
      country: "",
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
    const { name, value } = e.target;

    if (name in formData.address) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        formData
      );
      toast.success("Registration successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
      console.log("Registration successful", response.data);
    } catch (error) {
      toast.error("Registration failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
      console.error(
        "Registration failed",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Layout>
      <div className="flex justify-center md:p-[60px]">
        <div className="w-[500px] h-auto">
          <form className="p-4 register-form" onSubmit={handleSubmit}>
            <h1 className="text-2xl mt-2 text-center mb-6 font-bold">
              Register
            </h1>

            <div className="flex flex-wrap justify-between gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="pl-5 border placeholder:italic border-2 rounded-xl w-[220px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[220px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                placeholder="Enter your address"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[220px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[220px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[220px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[220px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <input
                type="number"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="Pin Code"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[220px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <div className="relative w-[220px]">
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

              <div className="relative w-[220px]">
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
                Register
              </button>
              <button
                type="button"
                className="border border-2 border-red-300 w-[120px] p-[5px] rounded-[30px] bg-gray hover:bg-red-400"
                onClick={onClickCancel}
              >
                Cancel
              </button>
            </div>
            <span className="flex justify-center">
              Already have an account? &nbsp;
              <Link
                to={"/log-in"}
                className="text-blue-500 hover:text-blue-700 hover:underline hover:scale-105"
              >
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>

      <ToastContainer />
    </Layout>
  );
};

export default NewRegistration;
