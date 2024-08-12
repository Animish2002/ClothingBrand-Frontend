import React from "react";
import Layout from "../../Components/Layout/Layout";

const ProductForm = () => {
  return (
    <Layout>
      <div className="h-[110vh] ">
        <div className="p-4 flex flex-col justify-center">
          <h1 className="text-2xl font-style">Add Product Details</h1>
          <div className=" border-black grid grid-cols-2 gap-4 p-4">
            <input
              type="text"
              placeholder="Product Name"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
            />
            <input
              type="text"
              placeholder="Product Category"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic "
            />
            <input
              type="text"
              placeholder="Product Quantity"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
            />
            <input
              type="text"
              placeholder="Product Material"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
            />
            <textarea
              placeholder="Product Description"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2"
              rows="3"
            />
            <input
              type="text"
              placeholder="Product Size (e.g., S, M, L)"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
            />
            <input
              type="text"
              placeholder="Product Color"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
            />
            <input
              type="number"
              placeholder="Product Price"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
            />
            <input
              type="number"
              placeholder="Product Discount (%)"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
            />
           
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Upload Product Images
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                className="mt-2 p-2 border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic"
              />
            </div>
            <textarea
              placeholder="SEO Title"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2"
              rows="2"
            />
            <textarea
              placeholder="Meta Description"
              className="border-2 border-gray-400 p-[7px] rounded-[10px] hover:border-indigo-500 focus:border-indigo-500 italic col-span-2"
              rows="2"
            />
            <div className="col-span-2 flex items-center gap-4">
             
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 w-10" />
                Active Status
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 w-10" />
                InActive Status
              </label>
            </div>
          </div>
          <div className="flex justify-center gap-10 p-6">
            <button className="px-[200px] py-2 bg-blue-400 hover:bg-blue-500 hover:text-white hover:scale-105">
              Add Product
            </button>
            <button className="px-[200px] py-2 bg-red-400 hover:bg-red-500 hover:text-white hover:scale-105">
              Reset Form
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductForm;
