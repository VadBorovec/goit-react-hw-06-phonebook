import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtered(state, action) {
      state = action.payload;
    },
  },
});

export const { filtered } = filterSlice.actions;
