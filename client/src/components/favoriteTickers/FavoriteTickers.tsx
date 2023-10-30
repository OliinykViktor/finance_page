import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import { StyleParams } from '../../type/style.type';

const FavoriteTickers: FC = () => {
  const style: StyleParams = {
    card: {
      display: 'flex',
      justifyContent: 'center',
    },
  }

  return (
    <>
      <Typography variant='h5'
        sx={{ m: 2 }}>
        Favorite tickers
      </Typography>
      <CardContent sx={style.card}>
        <FavoriteItem />
      </CardContent>
    </>
  );
};

export default FavoriteTickers;