import { ReactElement } from 'react';
import { SxProps, Theme } from '@mui/material';
import {
  DataGrid,
  GridCellParams,
  GridColumns,
  GridRowsProp,
  MuiBaseEvent,
  MuiEvent,
} from '@mui/x-data-grid';

export const DataTable = ({
  ariaLabel,
  ariaLabelledBy,
  checkboxSelection,
  columns,
  loading,
  onCellEditStop,
  pageSize = 50,
  sx,
  rows,
}: TDataTable): ReactElement => {
  const dataGridProperties: TDataTable = {
    columns,
    loading,
    onCellEditStop,
    rows,
  };

  // We either need ariaLabel or ariaLabelledBy
  if (ariaLabel) {
    dataGridProperties['ariaLabel'] = ariaLabel;
  } else if (ariaLabelledBy) {
    dataGridProperties['ariaLabelledBy'] = ariaLabelledBy;
  } else {
    console.error('DataTable: ariaLabel or ariaLabelledBy is required');
  }

  return (
    <DataGrid
      {...dataGridProperties}
      autoHeight={true}
      checkboxSelection={checkboxSelection}
      experimentalFeatures={{
        newEditingApi: true,
      }}
      pageSize={pageSize}
      rowsPerPageOptions={[]}
      showColumnRightBorder={false}
      showCellRightBorder={false}
      sx={{
        ...sx,
        border: 'none',
        '.MuiDataGrid-columnSeparator--sideRight': {
          display: 'none',
        },
      }}
    />
  );
};

export type TDataTableColumn = GridColumns;
export type TDataTableRows = GridRowsProp;

export type TDataTable = {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  checkboxSelection?: boolean;
  columns: TDataTableColumn;
  loading: boolean;
  onCellEditStop: (params: GridCellParams, event: MuiEvent<MuiBaseEvent>) => void;
  pageSize?: number;
  sx?: SxProps<Theme>;
  rows: TDataTableRows;
};
