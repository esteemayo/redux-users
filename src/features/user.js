import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { editUser } from 'services/userService';

export const updateUser2 = createAsyncThunk('users/update', async (user) => {
    const { data } = await editUser(user);
    return data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: 'john',
            email: 'john@example.com',
        },
        pending: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, { payload }) => {
            state.pending = false;
            state.user = payload;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = null;
        },
        remove: (state) => state.user = {},
    },
    extraReducers: {
        [updateUser2.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser2.fulfilled]: (state, { payload }) => {
            state.pending = false;
            state.user = payload;
        },
        [updateUser2.rejected]: (state) => {
            state.error = true;
            state.pending = null;
        },
    },
});

export const { updateStart, updateSuccess, updateError, remove } = userSlice.actions;

export default userSlice.reducer;
