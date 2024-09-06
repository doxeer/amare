import React, { useState } from "react";
import "./SearchBar.css"; // Stil dosyanız varsa

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Arama sorgusunu üst bileşene iletir
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
