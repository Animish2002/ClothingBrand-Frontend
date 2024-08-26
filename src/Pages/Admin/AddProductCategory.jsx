import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProductCategory = () => {
  const [categoryData, setCategoryData] = useState({
    categoryName: "",
    categoryDescription: "",
  });

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/products/category/addProductCategory`,
        categoryData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Product Category added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
   
    } catch (error) {
      toast.error("Failed to add Product Category. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="p-6 bg-white rounded-xl shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add Product Category
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="categoryName"
            placeholder="Product Category"
            onChange={handleChange}
            value={categoryData.categoryName}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="categoryDescription"
            placeholder="Product Category Description"
            onChange={handleChange}
            value={categoryData.categoryDescription}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProductCategory;
