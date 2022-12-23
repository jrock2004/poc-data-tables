import { faker } from '@faker-js/faker';

import { TUserData } from '../data-tables';
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
