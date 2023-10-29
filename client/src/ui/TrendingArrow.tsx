import { FC } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { TrendingArrowProps } from '../type/type';

const TrendingArrow: FC<TrendingArrowProps> = ({ isUp }) => {
    return isUp
        ? <TrendingDownIcon />
        : <TrendingUpIcon />
};

export default TrendingArrow