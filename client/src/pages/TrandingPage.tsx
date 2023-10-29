import { FC } from 'react';
import { Grid } from '@mui/material';

import FavoriteTickers from '../components/favoriteTickers/FavoriteTickers';
import Tickers from '../components/tickers/Tickers';
import MetaData from '../utils/metadata';


const TrandingPage:FC = () => {
    const metadata = MetaData({
        title: "Finance information portal",
        content: "A finance information portal where you can follow stocks."
    })
    return (
        <Grid>
            {metadata}
            <FavoriteTickers />
            <Tickers />
        </Grid>
    );
};

export default TrandingPage;