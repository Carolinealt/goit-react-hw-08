import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

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
    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
