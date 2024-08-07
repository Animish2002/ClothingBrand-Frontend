import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Layout>
      <div className="bg-white flex mt-20 mb-20 justify-center overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-9xl font-extrabold text-gray-500 tracking-widest">
            404
          </h1>
          <div className="bg-blue-500 text-white px-2 text-sm rounded-md rotate-12 absolute top-8 left-1/2 transform -translate-x-1/2">
            Page Not Found
          </div>
          <p className="text-gray-500 mt-5 mb-6 text-xl">
            Oops! The page you're looking for doesn't exist.
          </p>
          <button className="relative inline-block text-sm font-medium text-grey-500 group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-grey-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <Link to="/">
              <span className="relative block px-8 py-3 bg-white border border-current">
                Back to Home
              </span>
            </Link>
          </button>
        </div>
        <div
          className="absolute w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          style={{
            left: position.x * 0.05,
            top: position.y * 0.05,
          }}
        ></div>
        <div
          className="absolute top-[20%] w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          style={{
            right: position.x * 0.05,
            bottom: position.y * 0.05,
          }}
        ></div>
        <div
          className="absolute top-[50%] item-center left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          style={{
            left: position.x * -0.05,
            bottom: position.y * -0.05,
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default NotFound;
