import { configureStore } from '@reduxjs/toolkit';
import tickerReducer from './tickersSlice';

export const store = configureStore({
  reducer: {
    ticker: tickerReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;