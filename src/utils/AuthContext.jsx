import React, { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode"; // Ensure the correct import

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null); // Store user role

  useEffect(() => {
    // Retrieve token and role from localStorage on component mount
    const savedToken = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");

    if (savedToken) {
      setToken(savedToken);
      try {
        const decodedToken = jwtDecode(savedToken);
        console.log("token"+decodedToken);
        
        setRole(decodedToken.role);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  const login = (authToken) => {
    setToken(authToken);
    try {
      const decodedToken = jwtDecode(authToken);
      setRole(decodedToken.role);

      // Save token and role to localStorage
      localStorage.setItem("token", authToken);
      localStorage.setItem("role", decodedToken.role);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  };

  const logout = () => {
    setToken(null);
    setRole(null);

    // Remove token and role from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  const isAuthenticated = !!token;
  const userRole = role;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
