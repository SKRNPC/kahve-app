// SearchBar.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/features/searchSlice";

function SearchBar() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div>
      <input
        className="searchbar-css"
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
