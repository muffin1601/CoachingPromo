import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import RegisterInstituteForm from "./RegisterInstituteForm";
import SidebarMenu from "./SidebarMenu";
import categories from "../data/categories"; // Static categories data
import { slugify } from "../utils/slugMap"; // Import your slugify function

const Navbar = ({ toggleSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleRegistrationForm = () => {
    setShowRegistrationForm((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="top-banner">New & Trending For 2025</div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="mobile-header">
            <div className="logo">
              <a href="/">Coaching<span>Promo</span></a>
            </div>
          </div>

          <div className="menu-icon-btn" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Sidebar for mobile */}
          <SidebarMenu
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            toggleSearch={toggleSearch}
            showRegistrationForm={showRegistrationForm}
            toggleRegistrationForm={toggleRegistrationForm}
          />

          {/* Desktop Mega Menu */}
          <ul className="nav-links desktop-only">
            <li><a href="/" className="active">Home</a></li>

            {categories.map((cat, index) => (
              <li className="dropdown" key={index}>
                <div
                  className="dropdown-wrapper"
                  onMouseEnter={() => setDropdownOpen(cat.category)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <a href="#">{cat.category} ▾</a>
                  {dropdownOpen === cat.category && (
                    <div className="mega-dropdown">
                      {Array.from({ length: Math.ceil(cat.subcategories.length / 2) }).map((_, columnIndex) => {
                        const subGroup = cat.subcategories.slice(columnIndex * 2, columnIndex * 2 + 2);
                        return (
                          <div className="mega-column" key={columnIndex}>
                            {subGroup.map((sub, subIndex) => (
                              <div className="dropdown-category" key={subIndex}>
                                <div className="dropdown-category-title">{sub.name}</div>
                                <ul>
                                  {sub.products.map((prod, j) => (
                                    <li key={j}>
                                      <a
                                        href={`/${slugify(
                                          ["Trophy", "Wooden Trophy", "Badges", "Medals", "Other Awards"].includes(prod.name)
                                            ? "Awards"
                                            : cat.category
                                        )}/${slugify(prod.name)}`}
                                      >
                                        {prod.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </li>
            ))}
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>

          {/* Desktop Icons */}
          <div className="nav-icons">
            <button className="search-btn" onClick={toggleSearch}><FaSearch /></button>
            <MdSchool className="register-btn" onClick={toggleRegistrationForm} />
            <RegisterInstituteForm
              showRegistrationForm={showRegistrationForm}
              toggleRegistrationForm={toggleRegistrationForm}
            />
            <button className="login-btn" onClick={() => window.location.href = '/login'}><FaUser /></button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
