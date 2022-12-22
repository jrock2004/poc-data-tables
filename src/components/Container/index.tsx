import { ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';

export const Container = ({ children, title }: TContainer): ReactElement => {
  return (
    <Stack>
      <Typography variant="h4" sx={{ marginBottom: '24px' }}>
        {title}
      </Typography>

      <div className="tableContainer">{children}</div>
    </Stack>
  );
};

export type TContainer = {
  children: ReactElement;
  title: string;
};
