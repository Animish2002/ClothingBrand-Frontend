import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const userRole = localStorage.getItem("role");
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    return <Navigate to="/home" />;
  }

  if (role && userRole !== role) {
    // Redirect based on role
    return userRole === "admin" ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/user" />
    );
  }

  return children;
};

export default ProtectedRoute;
