import { FC, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import TickersItem from '../tickerItem/TickerItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectTickerData, setTicker } from './tickersSlice';

const Tickers: FC = () => {
  const tickerData = useSelector(selectTickerData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTicker())
  }, [dispatch])

  return (
    <Container sx={{ width: "100%" }}>
      <Typography variant='h5'
        sx={{ m: 2 }}>
        Market Trends
      </Typography>
      {tickerData.map((item) => (
        <TickersItem key={item.ticker} {...item} />
      ))}
    </Container>
  );
};

export default Tickers;
