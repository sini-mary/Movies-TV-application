import React, { useState } from "react";


const SearchBar = ({handleSearch}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleInput = (event) => {
    setSearchValue(event.target.value);
    console.log("I am typing", event.target.value);
  };

  const handleSearchClick = () => {
    console.log("I am searching", searchValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={handleInput}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;