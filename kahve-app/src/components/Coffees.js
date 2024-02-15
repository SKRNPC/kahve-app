import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffee } from "../redux/features/coffeeSlice";

function Coffees() {
  const dispatch = useDispatch();
  const coffee = useSelector((state) => state.coffee);

  useEffect(() => {
    dispatch(getCoffee());
  }, [dispatch]);

  console.log("coffee", coffee);

  return (
    <div>
      <div className="coffee-list">
        <h1>Coffee List</h1>
        {coffee.data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Ingredients: {item.ingredients.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coffees;
