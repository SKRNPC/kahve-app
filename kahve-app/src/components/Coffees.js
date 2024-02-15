import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffee } from "../redux/features/coffeeSlice";

function Coffees() {
  const dispatch = useDispatch();
  const coffee = useSelector((state) => state.coffee);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    dispatch(getCoffee());
  }, [dispatch]);

  const filteredCoffee =
    selectedCategory === "All"
      ? coffee.data
      : coffee.data.filter((item) => item.category === selectedCategory);

  const searchFilteredCoffee =
    searchTerm === ""
      ? filteredCoffee
      : filteredCoffee.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  console.log("coffee", coffee);

  return (
    <div>
      <div className="coffee-list">
        {searchFilteredCoffee.map((item) => (
          <div key={item.id}>
            <div className="title-css">
              <h2 className="title">{item.title}</h2>
            </div>
            <p className="desc-css">{item.description}</p>
            <p>Ingredients: {item.ingredients.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coffees;
