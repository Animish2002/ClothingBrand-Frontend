import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/LandingPage/Home.jsx";
import NewRegistration from "./Pages/NewRegistration.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import StyleGuide from "./Pages/StyleGuide.jsx";
import Loader from "./Pages/Loader.jsx";
import ProductForm from "./Pages/Admin/ProductForm.jsx";
import EditProductInfo from "./Pages/Admin/EditProductInfo.jsx";
import Cart from "./Pages/User/Cart.jsx";
import EditAccountDetails from "./Pages/User/EditAccountDetails.jsx";
import { AuthProvider } from "./utils/AuthContext.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import ProductListing from "./Pages/LandingPage/ProductListing.jsx";

import Order from "./Pages/Admin/Order.jsx";
import AllUserList from "./Pages/Admin/AllUserList.jsx";
import AddProductCategory from "./Pages/Admin/AddProductCategory.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<NewRegistration />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleGuide" element={<StyleGuide />} />

          {/* Admin Pages */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="productForm" element={<ProductForm />} />
            <Route path="editProduct" element={<EditProductInfo />} />
            <Route path="productListing" element={<ProductListing />} />
            <Route path="orders" element={<Order />} />
            <Route path="allUsers" element={<AllUserList />} />
            <Route path="addProductCategory" element={<AddProductCategory />} />
          </Route>

          {/* User Pages */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/editAccount" element={<EditAccountDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </AuthProvider>
  );
}

export default App;
