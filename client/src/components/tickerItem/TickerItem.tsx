import { FC } from 'react';
import { Card, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';

import { toggleFavorite } from '../../store/tickersSlice'
import TrendingArrow from '../../ui/TrendingArrow';
import { newData } from '../../type/type';
import { StyleParams } from '../../type/style.type';

const TickerItem: FC<newData> = ({
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

    const styles:StyleParams = {
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