import {FC} from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import ClearIcon from '@mui/icons-material/Clear';

import { toggleFavorite } from '../../store/tickersSlice'
import SkeletonItem from '../../ui/SkeletonItem';
import { newData } from '../../type/type';
import { StyleParams } from '../../type/style.type';
import { RootState } from '../../store';

const FavoriteItem: FC = () => {

    const createFav = createSelector((state:RootState) => state.ticker.data,
        (favorites) => favorites.filter((item:newData) => item.added === true));

    const favorit = useSelector(createFav);

    const dispatch = useDispatch();

    const style: StyleParams = {
        wrap: {
            width: '90px',
            m: 1,
            backgroundColor: 'whitesmoke'
        },
        icon: {
            width: '12px',
            height: '12px',
            backgroundColor: 'lightsalmon',
            cursor: 'pointer'
        },
        title: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        subtitle: {
            width: '100px',
        },
    }
    
    return (
        <>
            {favorit.length > 0 ? (
                favorit.map(({
                    id,
                    ticker,
                    price,
                    change_percent
                }:newData) => (
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
