import { ReactElement } from 'react';
import { Stack } from '@mui/material';

const App = (): ReactElement => {
  return (
    <Stack spacing={7} sx={{ padding: '6rem' }}>
      <div>Run storybook instead</div>
    </Stack>
  );
};

export default App;
