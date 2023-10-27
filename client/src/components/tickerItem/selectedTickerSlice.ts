import { createSlice } from '@reduxjs/toolkit';

const selectedTickersSlice = createSlice({
  name: 'selectedTickers',
  initialState: [],
  reducers: {
    addTicker: (state, action) => {
      state.push(action.payload);
    },
    removeTicker: (state, action) => {
      return state.filter(ticker => ticker !== action.payload);
    },
  },
});

export const { addTicker, removeTicker } = selectedTickersSlice.actions;

export const selectSelectedTickers = (state) => state.selectedTickers;

export default selectedTickersSlice.reducer;