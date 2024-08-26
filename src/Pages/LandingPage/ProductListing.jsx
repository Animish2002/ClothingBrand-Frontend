import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  const ProdListing = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/allProducts`
      );
      setProducts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    ProdListing();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="w-[290px] h-[440px] cards-border flex flex-col">
            <div className="relative h-[378px] overflow-hidden group">
              <img
                src={product.productImage[0].url}
                alt={product.productImage.url}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div className="px-5 pt-2">
              <span className="font-style">{product.productName}</span>
            </div>
            <div className="px-5">
              <span className="font-style">${product.productPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
