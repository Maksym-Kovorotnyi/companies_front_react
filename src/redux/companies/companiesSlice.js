import { createSlice } from "@reduxjs/toolkit";
import { getCompanies } from "./companiesOperations";

const companiesInitialState = {
  companies: null,
  isModal: false,
  isLoading: false,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState: companiesInitialState,
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompanies.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCompanies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.companies = payload;
    });
  },
  reducers: {
    toggleModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const { toggleModal } = companiesSlice.actions;
export const companiesReducer = companiesSlice.reducer;
