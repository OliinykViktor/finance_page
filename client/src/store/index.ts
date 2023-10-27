import { configureStore } from '@reduxjs/toolkit';
import tickerReducer from '../components/tickers/tickersSlice';

export const store = configureStore({
  reducer: {
    ticker: tickerReducer,
  },
});
