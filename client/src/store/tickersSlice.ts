import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import startSocketConnected from "../utils/startSocketConnected";
import { newData, tickersData } from "../type/type";
import { RootState } from ".";

const updateData = (state: tickersData, action: { payload: newData[] }) => {
  const newData = action.payload;
  state.data = newData.map((newItem) => {
    const existingItem = state.data.find(
      (item) => item.ticker === newItem.ticker
    );
    if (existingItem) {
      newItem.added = existingItem.added;
      return newItem;
    }
    return newItem;
  });
};

export const setTicker = createAsyncThunk(
  "tickers/setTicker",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await startSocketConnected(
        dispatch,
        setTickerData,
        rejectWithValue
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tickerSlice = createSlice({
  name: "ticker",
  initialState: { data: [] },
  reducers: {
    setTickerData: (state, action) => {
      updateData(state, action);
    },
    toggleFavorite: (state, action) => {
      const { id } = action.payload;
      const item: newData = state.data.find((item: newData) => item.id === id);
      if (item) {
        item.added = !item.added;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setTicker.fulfilled, (state, action) => {});
  },
});

export const { setTickerData, toggleFavorite } = tickerSlice.actions;

export const selectTickerData = (state:RootState) => state.ticker.data;

export default tickerSlice.reducer;
