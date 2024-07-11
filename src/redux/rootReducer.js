import { contactsReducer } from "./contacts/contactsSlice";
import { combineReducers } from "redux";
import { filterReducer } from "./filters/filterSlice";
import { authReducer } from "./auth/slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});
