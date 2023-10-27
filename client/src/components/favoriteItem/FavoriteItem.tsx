import React, {FC} from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import ClearIcon from '@mui/icons-material/Clear';

import { toggleFavorite } from '../tickers/tickersSlice'
import SkeletonItem from '../../ui/SkeletonItem';

interface FavoriteItemProps {
    id:string;
    ticker:string;
    price:string;
    change_percent:string
}

const FavoriteItem: FC = () => {

    const createFav = createSelector((state) => state.ticker.data,
        (favorites) =>
            favorites.filter((item) => item.added === true
            ))
    const favorit = useSelector(createFav)

    const dispatch = useDispatch();

    const style = {
        wrap: {
            width: 90,
            m: 1,
            backgroundColor: 'whitesmoke'
        },
        icon: {
            width: 12,
            height: 12,
            backgroundColor: 'lightsalmon',
            cursor: 'pointer'
        },
        title: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        subtitle: {
            width: 100,
        }
    }
    
    return (
        <>
            {favorit.length > 0 ? (
                favorit.map(({
                    id,
                    ticker,
                    price,
                    change_percent
                }:FavoriteItemProps) => (
                    <Box sx={style.wrap}
                        key={id}>
                        <Box sx={style.title}>
                            <Typography sx={style.subtitle}>
                                {ticker}
                            </Typography>
                            <ClearIcon sx={style.icon}
                                onClick={() => dispatch(
                                    toggleFavorite({ id })
                                )} />
                        </Box>
                        <Typography>
                            {price}$
                        </Typography>
                        <Typography>
                            {change_percent}%
                        </Typography>
                    </Box>
                ))
            ) : <SkeletonItem />}
        </>
    );
};

export default FavoriteItem;
