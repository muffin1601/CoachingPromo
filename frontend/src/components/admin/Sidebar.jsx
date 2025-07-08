// Example Sidebar.jsx component

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBox, FaTags, FaListUl } from "react-icons/fa";
import "../../styles/Sidebar.css"; // Ensure you have the appropriate styles for the sidebar

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // control open/close on mobile

  const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/login'; // or use React Router navigate
};

  return (
    <>
      <button 
        className="menu-icon-btn" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ position: "fixed", top: 50, left: 10, zIndex: 200 }}
      >
        &#9776;
      </button>

      <nav className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        {/* <div className="sidebar-header">Admin Panel</div> */}
        <ul>
          <li>
            <a href="#">
              <FaListUl className="icon" />
              Categories
            </a>
          </li>
          <li>
            <a href="#">
              <FaTags className="icon" />
              Subcategories
            </a>
          </li>
          <li>
            <a href="#">
              <FaBox className="icon" />
              Products
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="sidebar-logout-btn"
        onClick={logout}
        style={{
          position: "fixed",
          bottom: 250,
          left: sidebarOpen ? 20 : -200,
          transition: "left 0.3s",
          zIndex: 201,
          padding: "10px 20px",
          background: "#e53935",
          color: "#fff",
          border: "none",
          borderRadius: "15px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          marginLeft: "50px",
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Sidebar;
