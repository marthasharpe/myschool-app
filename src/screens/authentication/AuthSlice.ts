import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthenticationState } from "types/types";

const initialState: AuthenticationState = {
  token: null,
  user: null,
};

export const setAuthData = createAction<AuthenticationState>("setAuthData");
export const logout = createAction("logout");

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAuthData, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
    builder.addCase(logout, () => {
      return initialState;
    });
  },
});

export default authenticationSlice.reducer;
