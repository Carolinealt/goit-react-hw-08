import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("userData :>> ", userData);
      const { data } = await axios.post("users/signup", userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      console.log("userData :>> ", userData);
      const { data } = await axios.post("users/login", userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const logout = createAsyncThunk("auth/logout", async () => {});

// export const refreshUser = createAsyncThunk("auth/refresh", async () => {});
