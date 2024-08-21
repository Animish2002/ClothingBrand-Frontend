import React from "react";

const ProductListing = () => {
  return (
    <>
    <div className="grid grid-cols-4 gap-6 mb-6 p-6 w-[90%]">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="w-[300px] h-[420px] cards-border flex flex-col">
          <div className="relative h-[358px] overflow-hidden group">
            <img
              src="https://m.media-amazon.com/images/I/71Ebmh3i88L._AC_SX466_.jpg"
              alt="Product"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
          <div className="px-5">
            <span className="font-style">Polo Ralph Lauren</span>
          </div>
          <div className="px-5">
            <span className="font-style">Rs. 599</span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductListing;
