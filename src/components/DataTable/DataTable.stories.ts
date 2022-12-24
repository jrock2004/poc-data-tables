import type { Meta, StoryObj } from '@storybook/react';

import { columns, generateUserTableData } from '../../mocks/data';
import { DataTable } from '.';

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'User table',
    checkboxSelection: false,
    columns,
    loading: false,
    onCellEditStop: (params, event) => console.log({ params, event }),
    pageSize: 100,
    rows: generateUserTableData(10),
  },
};
