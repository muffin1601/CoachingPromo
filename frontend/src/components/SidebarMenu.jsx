import React, {useState} from "react";
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import "../styles/SidebarNavbar.css";
import categories from "../data/categories";
import RegisterInstituteForm from "./RegisterInstituteForm";

const SidebarMenu = ({
  menuOpen,
  toggleMenu,
  toggleSearch,
  showRegistrationForm,
  toggleRegistrationForm,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(prev => (prev === index ? null : index));
  };
  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`sidebar-backdrop ${menuOpen ? "visible" : ""}`}
        onClick={toggleMenu}
      />

      <div className={`sidebar-menu ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo">
              <a href="/">Coaching<span>Promo</span></a>
            </div>
          <span className="close-btn" onClick={toggleMenu}>✕</span>
        </div>

        <ul className="sidebar-links">
          <li onClick={toggleMenu}><a href="/">Home</a></li>

          {categories.map((cat, index) => (
            <li key={index} className="sidebar-category">
              <span onClick={() => toggleCategory(index)} style={{ cursor: "pointer" }}>
                {cat.category}
              </span>

              {activeCategory === index && (
                <ul className="sidebar-subcategories">
                  {cat.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <div className="sidebar-subcategory-name">{sub.name}</div>
                      <ul className="sidebar-products">
                        {sub.products.map((prod, prodIndex) => (
                          <li key={prodIndex}>
                            <a
                              href={`/${encodeURIComponent(cat.category)}/${encodeURIComponent(prod.name)}`}
                              onClick={toggleMenu}
                            >
                              {prod.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="sidebar-icons">
          <button
            onClick={() => { toggleSearch(); toggleMenu(); }}
            aria-label="Search"
          >
            <FaSearch />
          </button>

          <button
            onClick={toggleRegistrationForm}
            aria-label="Register institute"
          >
            <MdSchool />
          </button>

          <RegisterInstituteForm
            showRegistrationForm={showRegistrationForm}
            toggleRegistrationForm={toggleRegistrationForm}
          />

          <button
            onClick={() => { window.location.href = "/login"; }}
            aria-label="Login"
          >
            <FaUser />
          </button>

          <button
            aria-label="Add to favorites"
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
