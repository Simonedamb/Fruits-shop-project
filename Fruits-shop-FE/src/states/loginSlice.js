import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginSuccess: "",
  loginError: "",
};

export const loginUser = createAsyncThunk("login/loginUser", async (data) => {
  try {
    return await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res;
    });
  } catch (err) {
    console.log(err);
  }
});

const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.loginSuccess = "login effettuato con successo";
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.loginError = "impossibiile effettuare il login";
      });
  },
});

export default loginSlice.reducer;
