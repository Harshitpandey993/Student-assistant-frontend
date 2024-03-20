import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import AddProduct from "./pages/Addproduct/Addproduct";
import ChangePassword from "./pages/Auth/Changepassword";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/Auth/Forgotpassword";
import PasswordReset from "./pages/Auth/Resetpassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
};

export default App;
