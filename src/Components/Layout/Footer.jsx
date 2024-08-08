import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../assets/images/logo1.jpeg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section id="footer">
      <>
        <div className="footer">
          <div className="p-5 absolute left-0 top-0">
            <h1 className="text-5xl font-medium">
              <img
                src={logo}
                className="w-[210px] hover:scale-110 ease-in duration-300 "
                alt="logo"
              />
            </h1>
          </div>
          <div className="grid grid-cols-3 w-[800px] p-6">
            <span>
              <p
                title="FAQs"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                FAQs
              </p>
              <Link to={"/about"}>
                <p
                  title="About Us"
                  className="py-1 hover:underline cursor-pointer hover:text-blue-500"
                >
                  About Us
                </p>
              </Link>
              <Link to={"/contact"}>
                <p
                  title="contact"
                  className="py-1 hover:underline cursor-pointer hover:text-blue-500"
                >
                  Contact US
                </p>
              </Link>
              <p
                title="Privacy Policy"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Privacy Policy
              </p>
              <p
                title="Terms & Conditions"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Terms & Conditions
              </p>
            </span>
            <span>
              <p
                title="Sales"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Sales
              </p>
              <p
                title="Support"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Support
              </p>
              
              <Link to={"/styleGuide"}>
                <p
                  title="Style Guide"
                  className="py-1 hover:underline cursor-pointer hover:text-blue-500"
                >
                  Style Guide
                </p>
              </Link>
              <p
                title="Size Chart"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Size Chart
              </p>
            </span>
            <span>
              <p
                title="Suits"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Suits
              </p>
              <p
                title="Blazers & Jackets"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Blazers & Jackets
              </p>
              <p
                title="Trousers"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Trousers
              </p>
              <p
                title="Wallets"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Wallets
              </p>
              <p
                title="Ties & Bowties"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Ties & Bowties
              </p>
              <p
                title="Dress Shirts"
                className="py-1 hover:underline cursor-pointer hover:text-blue-500"
              >
                Dress Shirts
              </p>
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
    </section>
  );
};

export default Footer;
