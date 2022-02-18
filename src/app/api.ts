import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@env";
import { RootState } from "./store";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Resources", "Subjects"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/users/login/",
        method: "POST",
        body: { email, password },
      }),
    }),
    signup: builder.mutation({
      query: ({ email, password }) => ({
        url: "/users/signup/",
        method: "POST",
        body: { email, password },
      }),
    }),
    getResources: builder.query({
      query: (userId) => ({
        url: `/resources/${userId}`,
        method: "GET",
      }),
      providesTags: ["Resources"],
    }),
    getSubjects: builder.query({
      query: (userId) => ({
        url: `/subjects/${userId}`,
        method: "GET",
      }),
      providesTags: ["Subjects"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetResourcesQuery,
  useGetSubjectsQuery,
} = api;
