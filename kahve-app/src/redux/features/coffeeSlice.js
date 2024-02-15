import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const getCoffee = createAsyncThunk("getCoffee", async () => {
  try {
    const response = await axios.get("/db.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching coffee data:", error);
    throw error;
  }
});
export const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(getCoffee.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default coffeeSlice.reducer;
