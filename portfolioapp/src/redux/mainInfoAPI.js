import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BASE_URL from './testURL';

export const mainInfoAPI = createApi({
    reducerPath: 'infoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: headers => {
            return headers;
        },
    }),

    tagTypes: ['info'],
    endpoints: builder => ({
        updateMainInfo: builder.mutation({
            query: ({ values }) => ({
                url: `/main/info`,
                method: 'PUT',
                body: values,
            }),
            keepUnusedDataFor: 3,
            invalidatesTags: ['info'],
        }),

        updateAvatar: builder.mutation({
            query: ({ formData }) => ({
                url: `/main/avatars`,
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['info'],
        }),

        mainInfo: builder.query({
            query: () => ({
                url: `/main/info`,
                method: 'GET',
            }),
            keepUnusedDataFor: 3,
            providesTags: ['info'],
        }),
    }),
});

export const { useMainInfoQuery, useUpdateMainInfoMutation, useUpdateAvatarMutation } = mainInfoAPI;
