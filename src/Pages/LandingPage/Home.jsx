import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import suits from "../../assets/images/suits.jpg";
import blazerjackets from "../../assets/images/blazer&jackets.jpeg";
import trousers from "../../assets/images/trousers.jpg";
import wallets from "../../assets/images/wallets.jpg";
import tieBow from "../../assets/images/bowties.jpeg";
import dress from "../../assets/images/dressWear.jpeg";
import "../../assets/styles/Home.css";

import { Link } from "react-router-dom";

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
      <div className="h-full">
        <div className="relative w-full">
          <img
            src={images[activeImageIndex]}
            alt={`carousel-image-${activeImageIndex}`}
            className=" object-contain carousel-images"
          />
          <div className="absolute top-[50%] left-0 right-0 flex justify-between transform -translate-y-1/2">
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
        <div className="mt-4 py-20">
          <h1 className="text-4xl font-bold text-center font-style">
            Fearured Collections
          </h1>
          <h3 className="text-[16px] text-center font-style">
            Discover our latest menswear collections, crafted with precision and
            style.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
            <Link to="/suits">
              <div className="collection-boxes">
                <img src={suits} alt="suits" className="collection-image" />
                <span className="collection-text font-style">Suits</span>
              </div>
            </Link>
            <Link to="/blazers-jackets">
              <div className="collection-boxes">
                <img
                  src={blazerjackets}
                  alt="blazers & jackets"
                  className="collection-image"
                />
                <span className="collection-text font-style">Blazers & Jackets</span>
              </div>
            </Link>
            <Link to="/trousers">
              <div className="collection-boxes">
                <img
                  src={trousers}
                  alt="trousers"
                  className="collection-image"
                />
                <span className="collection-text font-style">Trousers</span>
              </div>
            </Link>
            <Link to="/wallets">
              <div className="collection-boxes">
                <img src={wallets} alt="wallets" className="collection-image" />
                <span className="collection-text font-style">Wallets</span>
              </div>
            </Link>
            <Link to="/ties-bowties">
              <div className="collection-boxes">
                <img
                  src={tieBow}
                  alt="ties & bowties"
                  className="collection-image"
                />
                <span className="collection-text font-style">Ties & Bowties</span>
              </div>
            </Link>
            <Link to="/dress">
              <div className="collection-boxes">
                <img src={dress} alt="dress" className="collection-image" />
                <span className="collection-text font-style">Dress Wear</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
