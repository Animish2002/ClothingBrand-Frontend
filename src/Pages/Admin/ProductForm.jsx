import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    productImage: [],
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
      productImage: [],
      seoTitle: "",
      metaDescription: "",
      status: true,
    });
  };

  const [categories, setCategories] = useState([]);


  useEffect(() => {
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
    } else if (e.target.name === "productImage") {
      setFormData({
        ...formData,
        productImage: [...formData.productImage, e.target.files[0]],
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategoryName = e.target.value;

    // Find the selected category object
    const selectedCategory = categories.find(
      (category) => category.categoryName === selectedCategoryName
    );

    // Update formData with the selected category's name and description
    setFormData({
      ...formData,
      productCategory: {
        categoryName: selectedCategoryName,
        categoryDescription: selectedCategory.categoryDescription,
      },
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");

      // Create a FormData object to handle file uploads and other form data
      const formDataToSend = new FormData();

      // Append all form data fields
      formDataToSend.append("productName", formData.productName);
      formDataToSend.append("productQuantity", formData.productQuantity);
      formDataToSend.append("productMaterial", formData.productMaterial);
      formDataToSend.append("productDescription", formData.productDescription);
      formDataToSend.append("productSize", formData.productSize);
      formDataToSend.append("productColor", formData.productColor);
      formDataToSend.append("productPrice", formData.productPrice);
      formDataToSend.append("productDiscount", formData.productDiscount);
      formDataToSend.append("seoTitle", formData.seoTitle);
      formDataToSend.append("metaDescription", formData.metaDescription);
      formDataToSend.append("status", formData.status);

      // Append productCategory fields
      formDataToSend.append(
        "productCategory[categoryName]",
        formData.productCategory.categoryName
      );
      formDataToSend.append(
        "productCategory[categoryDescription]",
        formData.productCategory.categoryDescription
      );

      // Append image files
      if (formData.productImage.length > 0) {
        formData.productImage.forEach((image, index) => {
          formDataToSend.append(`productImage`, image);
        });
      } else {
        console.error("No image file selected");
      }

      console.log("Form data being sent:", Object.fromEntries(formDataToSend));

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/products/addProduct`,
        formDataToSend,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

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
              <select
                name="productCategory.categoryName"
                onChange={handleCategoryChange}
                className="border-2 border-gray-400 p-[7px] rounded-[10px] w-full text-left hover:border-indigo-500 focus:border-indigo-500 italic"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.categoryName}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
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
              placeholder="Product Size (S, M, L, XL, 2XL, 3XL)"
              name="productSize"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.productSize}
            />
            <input
              type="text"
              placeholder="Product Color"
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
              type="file"
              name="productImage"
              accept="image/*"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              multiple
            />

            <input
              type="text"
              placeholder="SEO Title"
              name="seoTitle"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              onChange={handleChange}
              value={formData.seoTitle}
            />
            <textarea
              placeholder="Meta Description"
              name="metaDescription"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2"
              rows="3"
              onChange={handleChange}
              value={formData.metaDescription}
            />

            <div className="flex items-center">
              <label className="mr-2">Status:</label>
              <select
                name="status"
                className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
                onChange={handleChange}
                value={formData.status}
              >
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </select>
            </div>

            <button
              type="submit"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2 bg-blue-500 text-white"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2 bg-red-500 text-white"
            >
              Reset
            </button>
            
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ProductForm;
