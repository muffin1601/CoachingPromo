import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingButtons from "./components/FloatingButtons";
import RouteProtector from "./components/RouteProtector";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SearchOverlay from "./components/SearchOverlay";


const Home = lazy(() => import("./pages/Home"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const Login = lazy(() => import("./pages/Login"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const CustomizerPage = lazy(() => import("./pages/CustomizerPage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const CustomizeLogo = lazy(() => import("./pages/CustomizeLogo"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const BlogForm = lazy(() => import("./pages/BlogForm"));
const SearchResults = lazy(() => import("./pages/SearchResults"));


const HeroSection = lazy(() => import("./components/HeroSection"));


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <Router>
      <ScrollToTop />
      <div className="landing-page">
        <Navbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
          toggleSearch={toggleSearch}
        />

        {showSearch && (
          <SearchOverlay showSearch={showSearch} toggleSearch={toggleSearch} />
        )}

        
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading Home...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<div>Loading Home...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading About...</div>}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/blogs"
            element={
              <Suspense fallback={<div>Loading Blogs...</div>}>
                <BlogList />
              </Suspense>
            }
          />
          <Route
            path="/blogs/new"
            element={
              <Suspense fallback={<div>Loading Blog Form...</div>}>
                <BlogForm />
              </Suspense>
            }
          />
          <Route
            path="/blogs/:id"
            element={
              <Suspense fallback={<div>Loading Blog...</div>}>
                <BlogDetail />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading Login...</div>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/admin"
            element={
              <RouteProtector>
                <Suspense fallback={<div>Loading Admin Dashboard...</div>}>
                  <AdminDashboard />
                </Suspense>
              </RouteProtector>
            }
          />
          <Route
            path="/:category/:productName"
            element={
              <Suspense fallback={<div>Loading Product...</div>}>
                <ProductPage />
              </Suspense>
            }
          />
          <Route
            path="/:category/:productName/:subproduct"
            element={
              <Suspense fallback={<div>Loading Product...</div>}>
                <SingleProductPage />
              </Suspense>
            }
          />
          <Route
            path="/customize/:productType"
            element={
              <Suspense fallback={<div>Loading Customizer...</div>}>
                <CustomizerPage />
              </Suspense>
            }
          />
          <Route
            path="/:category/:productName/:subproduct/customize"
            element={
              <Suspense fallback={<div>Loading Customize Logo...</div>}>
                <CustomizeLogo />
              </Suspense>
            }
          />
          <Route
            path="/search-results"
            element={
              <Suspense fallback={<div>Searching...</div>}>
                <SearchResults />
              </Suspense>
            }
          />
        </Routes>

        {/* Optional lazy-loaded floating buttons */}
        <Suspense fallback={null}>
          <FloatingButtons />
        </Suspense>

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

        <Footer />
      </div>
    </Router>
  );
};

export default App;
