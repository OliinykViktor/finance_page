import {FC} from 'react';
import { Box, Skeleton } from '@mui/material';
import { StyleParams } from '../type/style.type';



const SkeletonItem:FC = () => {
  const style: StyleParams = {
    wrap: {
      width: '90px'
    },
  }

  return (
    <Box sx={style.wrap}>
      <Skeleton animation="wave"
        variant="rounded" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  );
};

export default SkeletonItem;