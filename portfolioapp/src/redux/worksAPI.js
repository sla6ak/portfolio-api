import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './testURL';

export const worksApi = createApi({
    reducerPath: 'worksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: headers => {
            return headers;
        },
    }),

    tagTypes: ['works'],
    endpoints: builder => ({
        newWork: builder.mutation({
            query: newWork => ({
                url: '/works/add',
                method: 'POST',
                body: newWork,
            }),
            keepUnusedDataFor: 3,
            invalidatesTags: ['works'],
        }),

        updateWork: builder.mutation({
            query: ({ param, upWork }) => ({
                url: `/works/update/${param}`,
                method: 'PATCH',
                body: upWork,
            }),
            keepUnusedDataFor: 3,
            invalidatesTags: ['works'],
        }),

        deleteWork: builder.mutation({
            query: param => ({
                url: `/works/delete/${param}`,
                method: 'DELETE',
            }),
            keepUnusedDataFor: 3,
            invalidatesTags: ['works'],
        }),

        allWorks: builder.query({
            query: () => ({
                url: `/works/all`,
                method: 'GET',
            }),
            keepUnusedDataFor: 3,
            providesTags: ['works'],
        }),
    }),
});

export const { useAllWorksQuery, useDeleteWorkMutation, useUpdateWorkMutation, useNewWorkMutation } = worksApi;
