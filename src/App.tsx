import { ReactElement } from 'react';
import { Stack } from '@mui/material';

import { DataTable, TDataTableColumn, TDataTableRows } from './components/DataTable';
import { generateUserTableData } from './mocks/data';
import { Container } from './components/Container';
import { GridRenderEditCellParams } from '@mui/x-data-grid';

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
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 150,
    },
    {
      editable: true,
      field: 'phone',
      headerName: 'Phone',
      type: 'string',
      width: 150,
    },
    {
      editable: true,
      field: 'dateSubscribed',
      headerName: 'Data Subscribed',
      type: 'date',
      width: 150,
    },
    {
      editable: true,
      field: 'isSubscribed',
      headerName: 'Subscribed',
      type: 'singleSelect',
      valueOptions: ['true', 'false'],
      width: 150,
    },
  ];

  const data: TDataTableRows = generateUserTableData(4);
  const dataLarge: TDataTableRows = generateUserTableData(400);

  return (
    <Stack spacing={7} sx={{ padding: '6rem' }}>
      <Container title="Default">
        <DataTable columns={columns} tableData={data} />
      </Container>
      <Container title="Default with Large Data">
        <DataTable columns={columns} tableData={dataLarge} />
      </Container>
      <Container title="With Checkbox">
        <DataTable checkboxSelection={true} columns={columns} tableData={data} />
      </Container>
    </Stack>
  );
};

export default App;
