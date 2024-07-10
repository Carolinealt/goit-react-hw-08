import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      });
  },
});

export const authReducer = authSlice.reducer;
