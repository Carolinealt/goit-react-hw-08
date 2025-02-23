import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations.js";
import { logout } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...action.payload];
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter((el) => el.id !== payload);
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
