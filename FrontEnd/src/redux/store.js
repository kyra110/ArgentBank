import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../redux/loginSlice";

export const mainStore = configureStore({
  reducer: {
    login: loginSlice.reducer
  },
});

export default mainStore;
