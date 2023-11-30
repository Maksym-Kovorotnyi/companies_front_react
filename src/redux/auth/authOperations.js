import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCurrentUser } from "redux/user/userOperations";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://localhost:3000/";

export const token = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post("auth/signup", credentials);
    } catch (error) {
      toast.error("Email is invalid or it is used");
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post("auth/login", credentials);
      token.set(data.accessToken);
      dispatch(getCurrentUser());
      return data;
    } catch (error) {
      toast.error("Email or password is wrong");
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.accessToken;
      token.set(value);
      await axios.post("auth/logout");
      token.unset();
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);
