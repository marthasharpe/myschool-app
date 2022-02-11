import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {
//   CONST_STORAGE,
//   getFromEncryptedStorage,
//   removeFromEncryptedStorage,
//   setFromEncryptedStorage,
// } from "utils/encryptedStorage";
import axios from "utils/axios";

export interface AuthenticationState {
  error: boolean;
  loading: boolean;
  token: string | null;
  tokenLoading: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  error: false,
  loading: false,
  tokenLoading: true,
  isAuthenticated: false,
  token: null,
};

// export const setTokenFromStorage = createAsyncThunk(
//   "authentication/setTokenFromStorage",
//   async () => {
//     const { data, error } = await getFromEncryptedStorage(CONST_STORAGE.TOKEN);
//     if (error) {
//       return null;
//     }
//     if (data) {
//       return JSON.parse(data);
//     }
//     return null;
//   }
// );

// export const login = createAsyncThunk(
//   "authentication/login",
//   async (code: string, { getState }) => {
//     try {
//       const state = (await getState()) as any;
//       const response = (
//         await axios.post("/v1/auth/app/otp-verify/", {
//           code,
//           phone_number: state.registration.registrationDetails.phoneNumber,
//         })
//       ).data;

//       await setFromEncryptedStorage(CONST_STORAGE.TOKEN, response.token);

//       return response;
//     } catch (e: any) {
//       throw e;
//     }
//   }
// );

// export const logout = createAsyncThunk("authentication/logout", async () => {
//   await removeFromEncryptedStorage(CONST_STORAGE.TOKEN);
//   return;
// });

// export const register = createAsyncThunk(
//   "authentication/register",
//   async (phone: string) => {
//     try {
//       await removeFromEncryptedStorage(CONST_STORAGE.TOKEN);
//       await axios.post("/v1/auth/app/register/", {
//         phone_number: phone,
//       });

//       return {
//         phone,
//       };
//     } catch (e: any) {
//       throw e;
//     }
//   }
// );

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(register.pending, (state) => {
  //     state.error = false;
  //     state.loading = true;
  //   });
  //   builder.addCase(register.fulfilled, (state) => {
  //     state.error = false;
  //     state.loading = false;
  //   });
  //   builder.addCase(register.rejected, (state) => {
  //     state.error = true;
  //     state.loading = false;
  //   });
  //   builder.addCase(login.pending, (state) => {
  //     state.error = false;
  //     state.loading = true;
  //   });
  //   builder.addCase(
  //     login.fulfilled,
  //     (
  //       state,
  //       action: PayloadAction<{
  //         token: string;
  //         user: any;
  //       }>
  //     ) => {
  //       state.error = false;
  //       state.loading = false;
  //       state.token = action.payload.token;
  //       state.isAuthenticated = !!action.payload.token;
  //     }
  //   );
  //   builder.addCase(login.rejected, (state) => {
  //     state.error = true;
  //     state.loading = false;
  //   });
  //   builder.addCase(setTokenFromStorage.pending, (state) => {
  //     state.tokenLoading = true;
  //   });
  //   builder.addCase(
  //     setTokenFromStorage.fulfilled,
  //     (state, action: PayloadAction<string>) => {
  //       state.tokenLoading = false;
  //       state.token = action.payload;
  //       state.isAuthenticated = !!action.payload;
  //     }
  //   );
  //   builder.addCase(logout.fulfilled, () => ({
  //     ...initialState,
  //     tokenLoading: false,
  //   }));
  // },
});

export default authenticationSlice.reducer;
