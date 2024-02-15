import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "../features/coffeeSlice";
import categoryReducer from "../features/categorySlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});
