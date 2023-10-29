import { RootState } from "../store";

export interface TrendingArrowProps {
  isUp: boolean;
}

export interface newData {
  id: number;
  ticker: string;
  exchange: string;
  price: string;
  change: string;
  change_percent: string;
  dividend: string;
  yieldValue: string;
  last_trade_time: string;
  added: boolean;
}

export interface tickersData {
  data: newData[];
}

export interface SocketParams {
  dispatch: (action: RootState) => void;
  setTickerData: (data: newData) => void;
  rejectWithValue: (message: string) => void;
}

export interface MetadataProps {
  title: string;
  content: string;
}
