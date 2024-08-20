import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import "../assets/styles/Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [resetForm, setResetForm] = useState({
    email: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onClickCancel = () => {
    setFormData(resetForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        formData
      );
      if (response.data) {
        const authToken = response.data.jwtToken;
        const decodedToken = jwtDecode(authToken);
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("sessionId", decodedToken.userId);
        localStorage.setItem("role", decodedToken.role);
      }
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000, // Change this to 2000 milliseconds (2 seconds)
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
      console.log("Login successful", response.data);
      setIsLoading(false);
      // Redirect to the "/" page after 2 seconds
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error) {
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
      console.error("Login failed", error.response?.data || error.message);
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center md:p-[60px]">
        <div className="w-[400px] h-auto">
          <form className="p-4 register-form" onSubmit={handleSubmit}>
            <h1 className="text-2xl mt-2 text-center mb-6 font-bold">Log in</h1>

            <div className="flex flex-col items-center gap-4 mb-4">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border placeholder:italic pl-5 border-2 rounded-xl w-[300px] p-[5px] hover:border-indigo-500 focus:border-indigo-500"
              />

              <div className="relative w-[300px]">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="border placeholder:italic pl-5 pr-10 border-2 rounded-xl w-full p-[5px] hover:border-indigo-500 focus:border-indigo-500"
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FaEyeSlash className="w-5 h-5 text-indigo-500" />
                  ) : (
                    <FaEye className="w-5 h-5 text-indigo-500" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center py-4 gap-4 col col-span-2">
              <button
                type="submit"
                className="border border-2 border-indigo-400 w-[150px] p-[5px] rounded-[30px] text-black bg-gray hover:bg-indigo-900 hover:text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-indigo-500"></div>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
              <button
                type="button"
                className="border border-2 border-red-400 w-[150px] p-[5px] rounded-[30px] bg-gray hover:bg-red-400"
                onClick={onClickCancel}
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
            <span className="text-[15px] flex justify-center">
              New User? &nbsp;{" "}
              <Link
                to={"/register"}
                className="text-blue-500 hover:text-blue-700 hover:underline hover:scale-105"
              >
                SignUp
              </Link>
            </span>
          </form>
        </div>
      </div>

      <ToastContainer />
    </Layout>
  );
};

export default Login;
