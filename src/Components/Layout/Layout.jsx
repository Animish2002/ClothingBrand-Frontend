import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="sticky top-0 z-10" />
      <Outlet />
      <main className="flex-grow container mx-auto px-12 ">{children}</main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Layout;
