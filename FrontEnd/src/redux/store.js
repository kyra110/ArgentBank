import { configureStore } from "@reduxjs/toolkit";
// importation du reducer loginReducer depuis le fichier "loginSlice.js"
import loginReducer from "./slices/loginSlice";
// configuration du store Redux en utilisant configureStore
const store = configureStore({
  reducer: {
    login: loginReducer, // ajout du reducer "loginReducer" sous le nom de "login" dans le store
  },
});
export default store;