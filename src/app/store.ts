import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "screens/authentication/AuthSlice";
import createSecureStore from "redux-persist-expo-securestore";
import { persistStore, persistCombineReducers } from "redux-persist";
import { api } from "./api";

const storage = createSecureStore();

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = {
  [api.reducerPath]: api.reducer,
  auth: authReducer,
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
