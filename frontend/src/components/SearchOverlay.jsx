import React, { useState } from "react";
import { FaTimes, FaEye } from "react-icons/fa";
import "../styles/contactform.css"; // Reuse same styling
import axios from "axios";

const SearchOverlay = ({ showSearch, toggleSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setHasSearched(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/search?query=${query}`);
      console.log("API response:", res.data);
      setResults(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Search error:", err);
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

            <div className="results-container">
              {results.length > 0 ? (
                results.map((item, index) => (
                  <div className="result-card" key={index}>
                    <img src={item.image} alt={item.name} className="result-image"/>
                    <div className="result-details">
                      <h4 className="result-title">{item.name}</h4>
                      <p className="result-content">{item.content}</p>
                      {/* <p className="result-price">₹{item.price}</p> */}
                      <button
                        className="view-button-2"
                        onClick={() =>
                          window.location.href = `/${encodeURIComponent(item.category)}/${encodeURIComponent(item.subcategory)}/${encodeURIComponent(item.name)}`
                        }
                      >
                        <FaEye /> View
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                  hasSearched && <p className="no-results">No items found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchOverlay;
