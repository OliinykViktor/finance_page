import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

const updateData = (state, action) => {

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
}

export const setTicker = createAsyncThunk(
  "tickers/setTicker",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const socket = socketIOClient(ENDPOINT);
      socket.emit("start");

      await new Promise((resolve) => {
        socket.on("ticker", (data) => {
          dispatch(setTickerData(data));
          resolve(data);
        });
      });
      return undefined;
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
      updateData(state, action)
    },
    toggleFavorite: (state, action) => {
      const { id } = action.payload;
      const item = state.data.find((item) => item.id === id);
      item ? (item.added = !item.added) : !item.added;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setTicker.fulfilled, (state, action) => {});
  },
});

export const { setTickerData, toggleFavorite } = tickerSlice.actions;

export const selectTickerData = (state) => state.ticker.data;

export default tickerSlice.reducer;
