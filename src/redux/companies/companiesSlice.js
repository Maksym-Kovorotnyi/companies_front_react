import { createSlice } from "@reduxjs/toolkit";
import { getCompanies } from "./companiesOperations";

const companiesInitialState = {
  companies: null,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState: companiesInitialState,
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state) => {
      state.isLoading = true;
      state.isNewUser = false;
    });
  },
  reducers: {
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
  },
});

// export const { setAccessToken } = authSlice.actions;
export const companiesReducer = companiesSlice.reducer;
