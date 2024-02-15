import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/features/categorySlice";

function Category() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="category-css">
      <p
        className={`category-name ${
          selectedCategory === "All" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("All")}
      >
        All Coffees
      </p>
      <p
        className={`category-name ${
          selectedCategory === "hot" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("hot")}
      >
        Hot
      </p>
      <p
        className={`category-name ${
          selectedCategory === "iced" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("iced")}
      >
        Iced
      </p>
    </div>
  );
}

export default Category;
