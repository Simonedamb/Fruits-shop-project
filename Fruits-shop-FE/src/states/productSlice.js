import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [],
  error: "",
  loading: true,
  status: "idle",
};

export const fetchFruits = createAsyncThunk("products/getFruits", async () => {
  try {
    const call = await fetch(`https://fruits-develhope.herokuapp.com/api`);
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
      })
      .addDefaultCase((state, action) => {
        if (
          action.type !== "cart/addItem" &&
          action.type !== "cart/removeItem" &&
          action.type !== "cart/decrementCart"
        ) {
          state.status = "idle";
          state.loading = false;
          state.fruits = initialState;
        }
      });
  },
});

export const allProducts = (state) => state.products.fruits;
export const productStatus = (state) => state.products.status;
export const errorProduct = (state) => state.products.error;
export const loadingProduct = (state) => state.products.loading;
export default storeState.reducer;
