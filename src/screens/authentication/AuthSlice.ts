import { createSlice } from "@reduxjs/toolkit";
import axios from "utils/axios";

export interface AuthenticationState {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  token: null,
  isAuthenticated: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
});

export default authenticationSlice.reducer;
