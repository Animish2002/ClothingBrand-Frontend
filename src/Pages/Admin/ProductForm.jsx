import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowDropdown } from "react-icons/io";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productCategory: {
      categoryName: "",
      categoryDescription: "",
    },
    productName: "",
    productQuantity: "",
    productMaterial: "",
    productDescription: "",
    productSize: "",
    productImage: "",
    productColor: "",
    productPrice: "",
    productDiscount: "",
    seoTitle: "",
    metaDescription: "",
    status: true,
  });

  const resetForm = () => {
    setFormData({
      productName: "",
      productCategory: {
        categoryName: "",
        categoryDescription: "",
      },
      productQuantity: "",
      productMaterial: "",
      productDescription: "",
      productSize: "",
      productColor: "",
      productPrice: "",
      productDiscount: "",
      productImage: "",
      seoTitle: "",
      metaDescription: "",
      status: true,
    });
  };

  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/products/category/ProductCategory`
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    if (e.target.name.startsWith("productCategory.")) {
      const [, fieldName] = e.target.name.split(".");
      setFormData({
        ...formData,
        productCategory: {
          ...formData.productCategory,
          [fieldName]: e.target.value,
        },
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const updatedCategories = { ...formData.productCategory };

    if (checked) {
      updatedCategories[value] = true;
    } else {
      delete updatedCategories[value];
    }

    setFormData({ ...formData, productCategory: updatedCategories });
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      const productCategory = formData.productCategory.map((categoryName) => {
        const category = categories.find(
          (c) => c.categoryName === categoryName
        );
        return {
          categoryName,
          categoryDescription: category?.categoryDescription || "",
        };
      });
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/products/addProduct`,
        {
          ...formData,
          productCategory,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log(formData);

      toast.success("Product added successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
      console.log("Product added successfully", response.data);
    } catch (error) {
      toast.error("Product addition failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Flip,
      });
      console.error(
        "Product addition failed",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      return (
      <div className="h-[110vh]">
        <div className="p-4 flex flex-col justify-center">
          <h1 className="text-2xl font-style">Add Product Details</h1>
          <form
            onSubmit={handleSubmit}
            className="border-black grid grid-cols-2 gap-4 p-4"
          >
            <input
              type="text"
              placeholder="Product Name"
              name="productName"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productName}
            />

            {/* Product Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={handleDropdownToggle}
                className="border-2 border-gray-400 p-[7px] rounded-[10px] w-full text-left flex justify-between items-center hover:border-indigo-500 focus:border-indigo-500 italic"
              >
                {formData.productCategory.length
                  ? "Categories Selected"
                  : "Select Categories"}
                <span>
                  <IoIosArrowDropdown className="text-xl" />
                </span>
              </button>
              {dropdownOpen && (
                <div
                  className="absolute border-2 border-gray-400 bg-white rounded-[10px] mt-2 z-10 w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center p-2">
                      <input
                        type="checkbox"
                        value={category.categoryName}
                        onChange={handleCategoryChange}
                        checked={
                          formData.productCategory[category.categoryName] ||
                          false
                        }
                        className="form-checkbox h-5 w-5 text-green-600"
                      />
                      <span className="ml-2 text-gray-700">
                        {category.categoryName}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <input
              type="text"
              placeholder="Product Quantity"
              name="productQuantity"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productQuantity}
            />
            <input
              type="text"
              placeholder="Product Material"
              name="productMaterial"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productMaterial}
            />

            {/* Add more input fields as needed */}
            <textarea
              placeholder="Product Description"
              name="productDescription"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2"
              rows="3"
              onChange={handleChange}
              value={formData.productDescription}
            />
            <input
              type="text"
              placeholder="Product Size's(S,M,L,XL,2XL,3XL)"
              name="productSize"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productSize}
            />
            <input
              type="text"
              placeholder="Product Color's"
              name="productColor"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productColor}
            />
            <input
              type="text"
              placeholder="Product Price"
              name="productPrice"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productPrice}
            />
            <input
              type="text"
              placeholder="Product Discount"
              name="productDiscount"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productDiscount}
            />

            <input
              type="text"
              placeholder="Product Image URL"
              name="productImage"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productImage}
            />

            {/* SEO Fields */}
            <textarea
              placeholder="SEO Title"
              name="seoTitle"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2"
              rows="2"
              onChange={handleChange}
              value={formData.seoTitle}
            />
            <textarea
              placeholder="Meta Description"
              name="metaDescription"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2"
              rows="2"
              onChange={handleChange}
              value={formData.metaDescription}
            />

            {/* Status Checkbox */}
            <div className="col-span-2">
              <label className="inline-flex items-center mt-3">
                <input
                  type="checkbox"
                  name="status"
                  checked={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.checked })
                  }
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span className="ml-2 text-gray-700">Active Status</span>
              </label>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-4 col-span-2">
              <button
                type="submit"
                className="bg-[#2A3856] text-white py-[7px] px-[15px] rounded-[10px]"
              >
                Add Product
              </button>
              <button
                onClick={resetForm}
                type="button"
                className="bg-red-400 text-white py-[7px] px-[15px] rounded-[10px]"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
      );
    </>
  );
};

export default ProductForm;
