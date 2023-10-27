import React, {FC} from 'react';
import { CardContent } from '@mui/material';
import FavoriteItem from '../favoriteItem/FavoriteItem';

const FavoriteTickers: FC = () => {
  const style = {
    card:{
      display:'flex', 
      justifyContent:'center'
    },
  }

  return (
    <CardContent sx={style.card}>
      <FavoriteItem/>
    </CardContent>
  );
};

export default FavoriteTickers;