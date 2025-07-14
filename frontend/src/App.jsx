import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import FloatingButtons from "./components/FloatingButtons";
import SingleProductPage from "./pages/SingleProductPage";
import Login from "./pages/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CustomizerPage from "./pages/CustomizerPage";
import AboutUs from "./pages/AboutUs";
import CustomizeLogo from "./pages/CustomizeLogo";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import BlogForm from "./pages/BlogForm";
import RouteProtector from "./components/RouteProtector";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchResults from "./pages/SearchResults";

const App = () => {
 
  return (
    
    <div className="landing-page">
      {/* <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} scrolltoApparel={scrolltoApparel} scrolltoBags={scrolltoBags} scrolltoStationary={scrolltoStationary} scrolltoTrophy={scrolltoTrophy} scrolltoPromotionalkits={scrolltoPromotionalkits} /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/home" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/new" element={<BlogForm />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<RouteProtector><AdminDashboard /></RouteProtector>} />
          <Route path="/:category/:productName" element={<ProductPage />} />
          <Route path="/:category/:productName/:subproduct" element={<SingleProductPage/>} />
          <Route path="/customize/:productType" element={<CustomizerPage/>} />
          <Route path="/:category/:productName/:subproduct/customize" element={<CustomizeLogo/>} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </Router>
      <FloatingButtons/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="custom-toast-container"
        toastClassName="custom-toast"
      />
    </div>
  );
};

export default App;
