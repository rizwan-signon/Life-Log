import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  showLogin: false,
};

export const showModel = createSlice({
  name: "show",
  initialState,
  reducers: {
    showRegisterPage: (state) => {
      state.show = true;
      state.showLogin = false;
    },
    showLoginPage: (state) => {
      state.showLogin = true;
      state.show = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showRegisterPage, showLoginPage } = showModel.actions;

export default showModel.reducer;
