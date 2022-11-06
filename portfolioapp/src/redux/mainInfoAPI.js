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
            query: ({ param, upWork }) => ({
                url: `/main/update/${param}`,
                method: 'PATCH',
                body: upWork,
            }),
            keepUnusedDataFor: 3,
            invalidatesTags: ['info'],
        }),
        updateAvatar: builder.mutation({
            query: ({ param, upWork }) => ({
                url: `/main/photo${param}`,
                method: 'PATCH',
                body: upWork,
            }),
            keepUnusedDataFor: 3,
            invalidatesTags: ['info'],
        }),

        mainInfo: builder.query({
            query: () => ({
                url: `/main/all`,
                method: 'GET',
            }),
            keepUnusedDataFor: 3,
            providesTags: ['info'],
        }),
    }),
});

export const { useMainInfoQuery, useUpdateMainInfoMutation, useUpdateAvatarMutation } = mainInfoAPI;
