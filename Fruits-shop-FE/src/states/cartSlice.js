import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [],
  amount: 0,
  totalPrice: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.fruits = [...state.fruits, action.payload];
      state.amount += 1;
      if (state.amount > 0) {
        state.totalPrice = Number(
          state.fruits
            .map((price) => {
              // console.log(parseFloat(price.price));
              const result = parseFloat(price.price.replace(/,/g, ".")).toFixed(
                2
              );
              return parseFloat(result);
            })
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        );
      }
    },
    removeItem: (state, action) => {
      const nextCartFruits = state.fruits.filter(
        (fruit) => fruit.cartId !== action.payload.cartId
      );
      state.fruits = nextCartFruits;
      state.amount -= 1;
      state.totalPrice = Number(
        state.fruits
          .map((price) => {
            // console.log(parseFloat(price.price));
            const result = parseFloat(price.price.replace(/,/g, ".")).toFixed(
              2
            );
            return parseFloat(result);
          })
          .reduce((a, b) => a + b, 0)
          .toFixed(2)
      );
    },
    decrementCart(state, action) {
      state.fruits.findIndex((fruit) => fruit.id === action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const amountState = (state) => state.cart.amount;
export const totalPrice = (state) => state.cart.totalPrice;

const cartReducer = cartSlice.reducer;
export default cartReducer;
