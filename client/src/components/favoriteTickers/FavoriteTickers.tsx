import {FC} from 'react';
import { CardContent } from '@mui/material';
import FavoriteItem from '../favoriteItem/FavoriteItem';
import { StyleParams } from '../../type/style.type';

const FavoriteTickers: FC = () => {
  const style :StyleParams = {
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