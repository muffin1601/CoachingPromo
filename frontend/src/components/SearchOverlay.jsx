import React, { useState } from "react";
import { FaTimes, FaEye } from "react-icons/fa";
import "../styles/contactform.css"; 
import { useNavigate } from "react-router-dom";

import axios from "axios";

const SearchOverlay = ({ showSearch, toggleSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const navigate = useNavigate();

  const handleSearch = (e) => {
  e.preventDefault();
  if (query.trim()) {
    toggleSearch(); // close overlay
    navigate(`/search-results?q=${encodeURIComponent(query)}`);
  }
};

  return (
    <>
      {showSearch && (
        <div className="form-overlay">
          <div className="form-container">
            <button className="close-button" onClick={toggleSearch}>
              <FaTimes />
            </button>
            <h2 className="head">Search Products</h2>
            <form onSubmit={handleSearch}>
              <div>
                <input
                className="form-input"
                  type="text"
                  name="search"
                  placeholder="Search by product name..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-button">Search</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchOverlay;
