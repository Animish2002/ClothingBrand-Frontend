import React from "react";
import Layout from "../Components/Layout/Layout.jsx";
import "../assets/styles/AboutUs.css";
import image1 from "../assets/images/jwimage1.png";
import image2 from "../assets/images/jwimage2.png";
import image3 from "../assets/images/jwimage3.png";

const AboutUs = () => {
  return (
    <Layout>
      <div className="about-us-container">
        <h1 className="section-title flex justify-center">
          Welcome to WickWear
        </h1>

        <section className="about-section flex items-center grid grid-cols-2 gap-2">
          <p className="text-balance about " >
            At WickWear, we believe in more than just fashion. We believe in
            making a statement—one that resonates with precision, elegance, and
            an unwavering commitment to quality. Inspired by the iconic style
            and relentless pursuit of perfection embodied by John Wick, our
            brand is designed for those who live life on their terms, with an
            unmistakable edge and timeless sophistication.
            <blockquote className="quote">
              "People keep asking if I’m back… Yeah, I’m thinking I’m back."
            </blockquote>
          </p>

          <img src={image1} alt="image1" className="image1 hover:scale-105" />
        </section>

        <h2 className="section-title flex justify-end mr-20">Our Story</h2>
        <section className="about-section flex items-center grid grid-cols-2 gap-2">
          <img
            src={image2}
            alt="image2"
            className="image2 w-[516px] h-[290px] hover:scale-105"
          />
          <p className="text-balance about">
            Born from a passion for classic tailoring and contemporary design,
            WickWear was founded with a single vision: to create clothing that
            merges the best of both worlds. Our journey began with a fascination
            for the sleek, understated style of the modern gentleman—crafted for
            the individual who values craftsmanship, durability, and the
            confidence that comes with wearing something extraordinary.
            <blockquote className="quote">
              "I have served. I will be of service."
            </blockquote>
          </p>
        </section>

        <h2 className="section-title">The WickWear Philosophy</h2>
        <section className="about-section flex items-center grid grid-cols-2 gap-2">
          <p className="text-balance about">
            We draw inspiration from the quiet confidence of the modern
            assassin—a figure who moves through life with purpose, grace, and an
            air of mystery. At WickWear, our clothing is designed to empower you
            to do the same. Whether you’re stepping into a boardroom, walking
            down the street, or attending an evening event, our pieces are
            crafted to make you feel invincible, sharp, and undeniably stylish.
            <blockquote className="quote">
              "Fortune favors the bold."
            </blockquote>
            <p>- Winston</p>
          </p>
          <img src={image3} alt="image3" className="image3 hover:scale-105" />
        </section>

        <section className="about-section ">
          <h2 className="section-title text-center">Join the WickWear Legacy</h2>
          <p className="text-center about">
            WickWear isn’t just about what you wear—it's about the attitude you
            carry. It's about dressing with intention and embracing a style that
            speaks to who you are. We invite you to explore our collections and
            find the pieces that will become the foundation of your wardrobe.
          </p>
        </section>

      </div>
    </Layout>
  );
};

export default AboutUs;
