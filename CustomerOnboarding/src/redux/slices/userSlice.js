import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  loginError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isUserLoggedIn = true;
    },
    setLoginError: (state, { payload }) => {
      state.loginError = payload;
    },
    resetLoginError: (state) => {
      state.loginError = "";
    },
  },
});

export const { login, setLoginError, resetLoginError } = userSlice.actions;

export default userSlice.reducer;
