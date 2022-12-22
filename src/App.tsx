import { ReactElement } from 'react';
import { Stack } from '@mui/material';

import { DataTable, TDataTableColumn, TDataTableRows } from './components/DataTable';
import { Container } from './components/Container';

const App = (): ReactElement => {
  const columns: TDataTableColumn = [
    {
      editable: true,
      field: 'name',
      headerName: 'Name',
      type: 'string',
      width: 150,
    },
    {
      editable: true,
      field: 'isMember',
      headerName: 'Is Member',
      type: 'singleSelect',
      valueOptions: ['true', 'false'],
      width: 150,
    },
  ];
  const data: TDataTableRows = [
    {
      id: '1',
      name: 'John Smith',
      isMember: true,
    },
    {
      id: '1',
      name: 'John Smith',
      isMember: true,
    },
  ];

  return (
    <Stack spacing={7} sx={{ padding: '6rem' }}>
      <Container title="Default">
        <DataTable columns={columns} tableData={data} />
      </Container>
      <Container title="With Checkbox">
        <DataTable checkboxSelection={true} columns={columns} tableData={data} />
      </Container>
    </Stack>
  );
};

export default App;
