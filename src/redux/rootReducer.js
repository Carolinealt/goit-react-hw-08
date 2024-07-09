import { contactsReducer } from "./contacts/contactsSlice";
import { combineReducers } from "redux";
import { filterReducer } from "./filters/filterSlice";
import { authReducer } from "./auth/slice";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
});
