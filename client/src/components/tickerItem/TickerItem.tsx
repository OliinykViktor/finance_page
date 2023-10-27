import React, { FC } from 'react';
import { Card, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { toggleFavorite } from '../tickers/tickersSlice'

import TrendingArrow from '../../ui/TrendingArrow';
import { useDispatch } from 'react-redux';

interface TickerItemProps {
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

const TickerItem: FC<TickerItemProps> = ({
    id,
    ticker,
    exchange,
    price,
    change,
    change_percent,
    added
}) => {
    const isChange = parseFloat(change);
    const dispatch = useDispatch()

    const styles = {
        coloms: {
            minWidth: '100px',
        },
        wrap: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minWidth: '400px',
            padding: '4px',
            cursor: 'pointer',
            backgroundColor: 'whitesmoke',
        },
        change: {
            backgroundColor: isChange <= 0 ? 'lightsalmon' : 'lightgreen',
        },
    };

    return (
        <Card sx={styles.wrap} key={ticker}>
            <Typography variant='h6'
                sx={styles.coloms}>
                {ticker}
            </Typography>
            <Typography sx={styles.coloms}>
                {exchange}
            </Typography>
            <Typography sx={styles.coloms}>
                {price}$
            </Typography>
            <Typography sx={{
                ...styles.change,
                ...styles.coloms
            }}>
                <TrendingArrow isUp={isChange < 0} />
                {change}$
            </Typography>
            <Typography sx={{
                ...styles.change,
                ...styles.coloms
            }}>
                <TrendingArrow isUp={isChange < 0} />
                {change_percent}%
            </Typography>
            <IconButton onClick={() => dispatch(toggleFavorite({ id }))}>
                {added ? <CheckIcon /> : <AddIcon />}
            </IconButton>
        </Card>
    );
};

export default TickerItem;