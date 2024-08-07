import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="p-5 absolute left-0 top-0">
          <h1 className="text-3xl font-medium">WickWear</h1>
          <p className="text-base font-light">Dress with Precision</p>
        </div>
        <div className="grid grid-cols-3 w-[800px] p-6">
          <span>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500 ">FAQs</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">About Us</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Contact US</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Privacy Policy</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Terms & Conditions</p>
          </span>
          <span>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Sales</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Support</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Size Chart</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Style Guide</p>
          </span>
          <span>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Suits</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Blazers & Jackets</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Trousers</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Wallets</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Ties & Bowties</p>
            <p className="py-1 hover:underline cursor-pointer hover:text-blue-500">Dress Shirts</p>
          </span>
        </div>
        <div className="absolute right-0 top-4 px-10">
          <h2 className="text-3xl font-medium">reach out to us</h2>
          <p>animishchopade123@gmail.com</p>
          <p>11 am to 6 pm Mon- Sun*</p>
          <div className="flex gap-4 text-2xl py-2">
            <span className="cursor-pointer hover:scale-125">
              <GrInstagram />
            </span>
            <span className="cursor-pointer hover:scale-125">
              <FaFacebook />
            </span>
            <span className="cursor-pointer  hover:scale-125">
              <FaYoutube />
            </span>
            <span className="cursor-pointer hover:scale-125">
              <FaSquareXTwitter />
            </span>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <h1>
          Copyright © 2024 Animish Chopade® - Suits, Blazers & Jackets,
          Trousers, Wallets, Ties & Bowties, Dress Shirts.
        </h1>
      </div>
    </>
  );
};

export default Footer;
