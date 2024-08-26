import React, { useEffect, useState } from "react";
import axios from "axios";

const ProdCategoryListing = () => {
  const [prodCategory, setProdCategory] = useState([]);

  const fetchProdCategory = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/category/ProductCategory`,
        {
          headers: {
            Authorization: ` ${token}`, // Ensure the token is prefixed with 'Bearer'
          },
        }
      );
      if (response.data && response.data.data) {
        setProdCategory(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchProdCategory();
  }, []);

  return (
    <div>
      <h1 className="text-[22px] font-semibold py-4 px-10">Product Category List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-xl px-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-800 ">
          <thead className="text-xs text-grey-200 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr. No
              </th>
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>
              <th scope="col" className="px-6 py-3">
                Decription
              </th>
            </tr>
          </thead>
          <tbody>
            {prodCategory.map((category, index) => (
              <tr key={category._id}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {index + 1}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {category.categoryName}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {category.categoryDescription}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProdCategoryListing;
