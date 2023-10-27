import React, { FC } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface TrendingArrowProps {
    isUp: boolean;
}

const TrendingArrow: FC<TrendingArrowProps> = ({ isUp }) => {
    return isUp
        ? <TrendingDownIcon />
        : <TrendingUpIcon />
};

export default TrendingArrow