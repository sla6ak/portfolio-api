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
            query: ({ upInfo }) => ({
                url: `/main/update/`,
                method: 'PATCH',
                body: upInfo,
            }),
            keepUnusedDataFor: 3,
            invalidatesTags: ['info'],
        }),

        updateAvatar: builder.mutation({
            query: ({ formData }) => ({
                url: `/main/avatars`,
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    Boundary: 'ggfhhghfghfdfdgdfsdff',
                },
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
