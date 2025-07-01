import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const libraryApi = createApi({
    reducerPath: "libraryApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api"}),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ()=> "/books",
        }),
    })
});

export const { useGetBooksQuery } = libraryApi;