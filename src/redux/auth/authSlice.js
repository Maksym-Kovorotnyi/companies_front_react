import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./authOperations";

const authInitialState = {
  user: {},
  accessToken: null,
  isLoading: false,
};

function loginFulfilled(state, { payload }) {
  state.user = payload.user;
  state.accessToken = payload.accessToken;
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
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, loginFulfilled)
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
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
