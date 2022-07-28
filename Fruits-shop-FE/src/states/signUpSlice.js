import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  amount: 0,
};

const signUpSlice = createSlice({
  name: "registerUsers",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        ...action.payload,
      });
    },
    logOutUser: (state, action) => {
      state.users = [];
      state.amount = 0;
    },
  },
});

export const userArray = (state) => state.registerUsers.users;

export const { addUser, logOutUser } = signUpSlice.actions;

export default signUpSlice.reducer;
