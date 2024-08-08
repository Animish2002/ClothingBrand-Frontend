import React from "react";
import Layout from "../Components/Layout/Layout";
import hotel from "../assets/images/hotelContinental.png";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">

        <img
          src={hotel}
          alt="hotel"
          className="h-[450px] w-[750px] object-cover mb-8 hover:scale-105 ease-in transition-all duration-300 hotel"
        />
        <div className="flex flex-col text-start text-balance w-[500px] pb-12">
          <h1 className="text-3xl font-bold mb-4 font-style">Contact Information</h1>
          <p className="mb-4 font-style">
            We love hearing from you—whether it's about our customer service,
            merchandise, website, or any thoughts you'd like to share. Your
            comments and suggestions are greatly appreciated.
          </p>
          <div className="mb-4 font-style">
            Continental Towers, 7th Floor, Suite 313 <br />
            No official business conducted here <br />
            Winston Plaza, High Table District, <br />
            New York City, NY 10013 <br />
            United States
          </div>
          <p className="mb-4 font-style">🕒Operating Hours: 11:00 AM to 6:00 PM, Mon - Sun</p>
          <p className="mb-4 font-style">
            Closed on Continental business days and during High Table meetings
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 font-style">Email Us:</h2>
            <p className="mt-2 font-style">concierge@wickwear.com</p>
          </div>
          <p className="mb-4 italic font-semibold">We look forward to hearing from you. Dress sharp. Live sharper.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;