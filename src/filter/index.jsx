import React from "react";

const CategoryButtons = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div >
      <button
        className={selectedCategory === "all" ? "active" : "inactive"}
        onClick={() => handleCategoryChange("all")}
      >
        All
      </button>
      <button
        className={selectedCategory === "28" ? "active" : "inactive"}
        onClick={() => handleCategoryChange("28")}
      >
        Action
      </button>
      <button
        className={selectedCategory === "35" ? "active" : "inactive"}
        onClick={() => handleCategoryChange("35")}
      >
        Comedy
      </button>
    </div>
  );
};

export default CategoryButtons;