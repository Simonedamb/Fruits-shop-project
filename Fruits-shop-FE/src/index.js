import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./states/cartSlice";
import fruitsReducer from "./states/productSlice";
import registerReducer from "./states/signUpSlice";

const reducer = combineReducers({
  cart: cartReducer,
  products: fruitsReducer,
  user: registerReducer,
});

const store = configureStore({
  reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
