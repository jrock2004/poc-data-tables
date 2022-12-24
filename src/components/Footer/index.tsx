import { Pagination } from '@mui/material';
import { Stack } from '@mui/system';
import { ReactElement } from 'react';

export const Footer = (): ReactElement => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: 'hidden',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Stack></Stack>
      <Stack>
        <Pagination count={10} size="small" />
      </Stack>
      <Stack>Right</Stack>
    </Stack>
  );
};

// export type TFooter = {
//   totalPages: number;
//   tot
// };
