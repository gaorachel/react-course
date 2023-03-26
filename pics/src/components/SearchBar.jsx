import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label className="label-text"> Press ENTER to search images: </label>
        {/* Confirm your search keyword is: {term.toLocaleUpperCase()} */}
        <div>
          <input value={term} onChange={handleChange} minLength={2} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
