import { configureStore } from "@reduxjs/toolkit";
import customersReducer from "./slices/customersSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    customers: customersReducer,
    user: userReducer,
  },
});
