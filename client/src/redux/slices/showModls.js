import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const showModel = createSlice({
  name: "show",
  initialState,
  reducers: {
    showRegisterPage: (state) => {
      state.show = !state.show;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showRegisterPage } = showModel.actions;

export default showModel.reducer;
