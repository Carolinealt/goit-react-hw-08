import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filters/selectors";

export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;
export const selectContactsList = (state) => {
  return state.contacts.items;
};

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterValue],
  (list, filterValue) => {
    return filterValue !== ""
      ? list.filter((contact) =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : list;
  }
);
