import { createSlice } from "@reduxjs/toolkit";
// initialisation du slice loginSlice
const initialState = {
  token: null,
  status: "idle",
  error: null,
  user: null,
};
// création du loginSlice
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   gestion des actions asynchrones et de leurs états
  //   builder
  //     .addCase(loginUser.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(loginUser.fulfilled, (state) => {
  //       state.status = "succeeded";
  //       state.token = action.payload;
  //     })
  //     .addCase(loginUser.rejected, (state) => {
  //       state.status = "failed";
  //       state.error = action.payload;
  //     });
  // },
});
// export du reducer du slice
export default loginSlice.reducer;
