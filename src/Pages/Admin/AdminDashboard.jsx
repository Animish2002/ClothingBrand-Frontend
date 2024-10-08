import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import AdminHeader from "../../Components/Layout/AdminHeader";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { TiThListOutline } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <AdminHeader />
      </div>

      <hr></hr>
      <div className="flex w-full">
        <div className="min-h-screen w-[18%] border-r-2">
          <div className="flex flex-col gap-4 pt-6 pl-[20%]">
            <ul className="flex flex-col gap-4 py-4">
              <Link to="productListing">
                <li className="py-1.5 px-10 border-t-2 border-b-2 border-l-2 border-[#c586a5] hover:bg-[#ffebf5]">
                  <TiThListOutline className="inline text-xl" />
                  &nbsp; List Items
                </li>
              </Link>
              <Link to="orders">
                <li className="py-1.5 px-10 border-t-2 border-b-2 border-l-2 border-[#c586a5] hover:bg-[#ffebf5]">
                  <TbTruckDelivery className="inline text-xl" />
                  &nbsp; Orders
                </li>
              </Link>
              <Link to="allUsers">
                <li className="py-1.5 px-10 border-t-2 border-b-2 border-l-2 border-[#c586a5] hover:bg-[#ffebf5]">
                  <MdAddCircleOutline className="inline text-xl" />
                  &nbsp; All Users
                </li>
              </Link>
              <Link to="productForm">
                <li className="py-1.5 px-10 border-t-2 border-b-2 border-l-2 border-[#c586a5] hover:bg-[#ffebf5]">
                  <MdAddCircleOutline className="inline text-xl" />
                  &nbsp; Add items
                </li>
              </Link>
              <Link to="addProductCategory">
                <li className="py-1.5 px-2 border-t-2 border-b-2 border-l-2 border-[#c586a5] hover:bg-[#ffebf5]">
                  <MdAddCircleOutline className="inline text-xl" />
                  &nbsp; Add Product Category
                </li>
              </Link>
              <Link to="prodCategories">
                <li className="py-1.5 px-2 border-t-2 border-b-2 border-l-2 border-[#c586a5] hover:bg-[#ffebf5]">
                  &nbsp; Product Categories
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Content area where different components will be rendered */}
        <div className="w-[82%] p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
