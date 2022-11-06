import { createSlice } from '@reduxjs/toolkit';

const initialAdmin = false;

export const curentUser = createSlice({
    name: 'admin',
    initialState: initialAdmin,
    reducers: {
        isAdmin(_state, action) {
            return action.payload;
        },
    },
});

export const { isAdmin } = curentUser.actions;
