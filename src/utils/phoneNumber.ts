import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';

export const getPhoneNumber = (phone: string | undefined): string => {
  if (phone && phone.length === 10) {
    return formatPhoneNumber(`+1${phone}`);
  } else if (phone && phone.length === 10 && phone.startsWith('1')) {
    return formatPhoneNumber(`+1${phone}`);
  } else if (phone && phone.length === 11 && phone.startsWith('1')) {
    return formatPhoneNumber(`+${phone}`);
  } else if (phone && phone.length > 10) {
    return formatPhoneNumberIntl(`+${phone}`);
  }

  return phone || '';
};
