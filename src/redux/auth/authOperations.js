import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3000/";

// export const token = {
//   set(accessToken) {
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

export const register = createAsyncThunk(
  "auth/signup",
  async (body, { rejectWithValue }) => {
    try {
      await axios.post("auth/signup", body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("auth/signin", body);
      return data;
    } catch (error) {
      toast.error("Email or password are wrong");
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { accessToken } = getState().auth;
      await axios.get("auth/logout", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      toast.error(error.response.data);
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/profile",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { accessToken } = getState().auth;
      const response = await axios.get("auth/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
