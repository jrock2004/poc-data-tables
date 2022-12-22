import { ReactElement } from 'react';
import { Select, Stack } from '@mui/material';
import { DataGrid, GridColumns, GridRenderEditCellParams, GridRowsProp } from '@mui/x-data-grid';

const RenderEditCell = (params: GridRenderEditCellParams): ReactElement => {
  return (
    <Stack>
      <Select
        value={params.value}
        onChange={(e) =>
          params.api.setEditCellValue({ id: params.id, field: params.field, value: e.target.value })
        }
      />
    </Stack>
  );
};

export const DataTable = ({ checkboxSelection, columns, tableData }: TDataTable): ReactElement => {
  return (
    <div
      style={{
        height: '300px',
        width: '100%',
      }}
    >
      <DataGrid
        checkboxSelection={checkboxSelection}
        columns={columns}
        rows={tableData}
        showColumnRightBorder={false}
        showCellRightBorder={false}
        sx={{
          border: 'none',
        }}
      />
    </div>
  );
};

export type TDataTableColumn = GridColumns;
export type TDataTableRows = GridRowsProp;

export type TDataTable = {
  checkboxSelection?: boolean;
  columns: TDataTableColumn;
  tableData: TDataTableRows;
};
