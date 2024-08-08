import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483118714900-540cf339fd46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661313659755-f716c84bddd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1658506811178-9cc8eeb0ca06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://static01.nyt.com/images/2019/05/17/arts/johnwickaction1/johnwickaction1-jumbo.jpg?quality=75&auto=webp",
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrevious = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        handleNext();
      }, 3000); // Change image every 3 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  return (
    <Layout>
      <div className="min-h-screen flex justify-center ">
        <div className="relative w-full">
          <img
            src={images[activeImageIndex]}
            alt={`carousel-image-${activeImageIndex}`}
            className=" object-contain carousel-images"
          />
          <div className="absolute top-[40%] left-0 right-0 flex justify-between transform -translate-y-1/2">
            <button
              onClick={handlePrevious}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        
        {/* <button 
          onClick={toggleAutoPlay}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button> */}
      </div>
      
    </Layout>
  );
};

export default Home;
