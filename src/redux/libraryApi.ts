import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const libraryApi = createApi({
    reducerPath: "libraryApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api"}),
    tagTypes: ["books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ()=> "/books",
            providesTags: ["books"],
        }),
        addBook: builder.mutation({
            query: (bookData) => ({
                url: '/books',
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["books"]
        }),
        updateBook: builder.mutation({
            query: ({bookId, ...bookData}) => ({
                url: `/books/${bookId}`,
                method: "PUT",
                body: bookData
            }),
            invalidatesTags: ["books"]
        }),
        getBook: builder.query({
            query: (bookId) => `/books/${bookId}`,
            providesTags: ["books"],
        }),
    })
});

export const { useGetBooksQuery, useAddBookMutation, useUpdateBookMutation, useGetBookQuery } = libraryApi;
