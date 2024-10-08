import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  show: false,
  userInfo: null,
  logedInUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDetails: (state, actions) => {
      state.user = actions.payload;
    },
    storeId: (state, actions) => {
      state.userInfo = actions.payload;
    },
    showForm: (state) => {
      state.show = true;
    },
    storeLoggedInUser: (state, actions) => {
      state.logedInUser = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userDetails, storeId, showForm, storeLoggedInUser } =
  userSlice.actions;

export default userSlice.reducer;
