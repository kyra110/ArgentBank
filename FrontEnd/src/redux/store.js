import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../redux/loginSlice";

export const mainStore = configureStore({
  reducer: {
    Login: loginSlice.reducer
  },
});

export default mainStore;
