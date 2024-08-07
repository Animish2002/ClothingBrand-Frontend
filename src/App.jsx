import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/LandingPage/Home.jsx";
import NewRegistration from "./Pages/NewRegistration.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<NewRegistration />} />
        <Route path="/log-in" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
    </Router>
  );
}

export default App;
