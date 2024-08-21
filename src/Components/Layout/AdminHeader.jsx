import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/AdminHeader.css";

const AdminHeader = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("authToken");
  const handleLogout = () => {
    // Clear user data and token from local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("sessionId");
    localStorage.removeItem("role");

    // Redirect to home page after logout
    navigate("/");
  };
  return (
    <div className="flex justify-between px-8 pt-4">
      <div>
        <Link to={"/admin"}>
          <div>
            <h1
              title="WickWear"
              id="title"
              className="text-3xl font-bold cursor-pointer title"
            >
              WICKWEAR
            </h1>
            <span className="text-sm admin-panel ml-9">Admin Panel</span>
          </div>
        </Link>
      </div>

      <div>
        {isAuthenticated ? (
          <button
            title="log out"
            className="bg-gray-600 text-white px-8 py-2 border rounded-3xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to={"/log-in"}>
            <button
              title="log in"
              className="bg-gray-600 text-white px-8 py-2 border rounded-3xl"
            >
              Log in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
