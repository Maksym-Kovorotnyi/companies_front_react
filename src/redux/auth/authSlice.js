import { createSlice } from "@reduxjs/toolkit";
import { currentUser, login, logout, register } from "./authOperations";

const authInitialState = {
  user: {},
  accessToken: null,
  nickname: "",
  isLoading: false,
  isNewUser: false,
};

function loginFulfilled(state, { payload }) {
  state.accessToken = payload.token;
  state.nickname = payload.nickname;
}

function logOutFulfilled(state) {
  state.user = {};
  state.accessToken = null;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isNewUser = false;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isNewUser = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, loginFulfilled)
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(currentUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, logOutFulfilled)
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
  reducers: {
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
  },
});

export const { setAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
