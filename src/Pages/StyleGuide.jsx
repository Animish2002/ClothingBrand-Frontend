import React from "react";
import Layout from "../Components/Layout/Layout.jsx";
import guideimg from "../assets/images/SuitStyle.jpeg";

const StyleGuide = () => {
  return (
    <Layout>
      <div className="flex justify-center grid mb-8 relative">
        <h1 className="text-4xl font-bold font-style text-center mb-2 hover:underline">
          Style Guide
        </h1>
        <div className="h-[670px] border-2 border-black mt-5 shadow-[0_35px_70px_10px_rgba(0,0,0,0.4)]">
          <img src={guideimg} alt="guideimg" className="h-[650px] p-4" />
        </div>
      </div>
    </Layout>
  );
};

export default StyleGuide;
