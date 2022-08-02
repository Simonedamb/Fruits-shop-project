import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [],
  error: "",
  loading: true,
  status: "idle",
};

export const fetchFruits = createAsyncThunk("/fruits", async () => {
  try {
    const call = await fetch(`http://localhost:3002/fruits`);
    const response = await call.json();
    return response;
  } catch (error) {
    throw error;
  }
});

const storeState = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFruits.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchFruits.fulfilled, (state, action) => {
        state.status = "ok";
        state.loading = false;
        state.fruits = action.payload;
      })
      .addCase(fetchFruits.rejected, (state) => {
        state.status = "failed";
        state.loading = false;
        state.error = "impossibile caricare i dati";
      });
  },
});

export const allProducts = (state) => state.products.fruits;
export const productStatus = (state) => state.products.status;
export const errorProduct = (state) => state.products.error;
export const loadingProduct = (state) => state.products.loading;
export default storeState.reducer;
