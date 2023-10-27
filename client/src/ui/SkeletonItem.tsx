import React,{FC} from 'react';
import { Box, Skeleton } from '@mui/material';

const SkeletonItem:FC = () => {
  const style = {
    wrap: {
      width: 90
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