import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    textSearch(state, action) {
      return (state = action.payload);
    },
  },
});

export const { textSearch } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
