// Creation de la slice de conexion

import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
  },
  reducers: {
    //Action pour connecter l'utilisateur
    loginUser:(state, action) =>{
      state.user = action.payload; // Stokera les informations avec dispatch
    },
    // Action pour deconecter l'utilisateur
    logoutUser:(state) =>{
      state.user = null; // Remet a zéro les information user
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;

export default loginSlice;
