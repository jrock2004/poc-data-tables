import { faker } from '@faker-js/faker';

import { TUserData } from '../data-tables';
import { TDataTableColumn } from '../components/DataTable';
import { getPhoneNumber } from '../utils/phoneNumber';

export const generateUserTableData = (count: number): TUserData[] => {
  return Array.from({ length: count }, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: getPhoneNumber(faker.phone.number('##########')),
    dateSubscribed: faker.date.past(1).toLocaleDateString(),
    isSubscribed: faker.datatype.boolean(),
  }));
};

export const columns: TDataTableColumn = [
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
