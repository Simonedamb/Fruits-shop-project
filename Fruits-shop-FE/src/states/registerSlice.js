import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  registerSuccess: "",
  registerError: "",
};

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (data) => {
    try {
      return await fetch(`http://localhost:3000/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
  }
);

const registerSlice = createSlice({
  name: "addUser",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.registerSuccess = "utente registrato con successo";
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.registerError = "impossibile completare la richiesta";
      });
  },
});

export default registerSlice.reducer;
