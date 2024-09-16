import React, { useState } from "react";
import "./SearchBar.css"; // Stil dosyanız varsa

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
      />
    </div>//asdsadsadsadsda
  );
};

export default SearchBar;
