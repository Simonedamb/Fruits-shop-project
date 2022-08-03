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
import userRegisterReducer from "./states/registerSlice";
import loginReducer from "./states/loginSlice";

const reducer = combineReducers({
  cart: cartReducer,
  products: fruitsReducer,
  user: registerReducer,
  register: userRegisterReducer,
  login: loginReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
