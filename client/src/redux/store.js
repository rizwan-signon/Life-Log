import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import showModel from "./slices/showModls";
export const store = configureStore({
  reducer: {
    user: userSlice,
    show: showModel,
  },
});
