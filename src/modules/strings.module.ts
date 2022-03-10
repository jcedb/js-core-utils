import { TFullName } from '../types/fullname.type';
import { TString } from '../types/string.type';
import { TUpperCase } from '../types/uppercase.type';
import { hasValue } from './boolean.module';

export const mask = function (payload: TString) {
  try {
    if (!payload) throw new Error('Argument is required.');
    if (typeof payload !== 'object')
      throw new Error(
        "Invalid argument type, parameter should be of type object with type: { str: string, maskLength: number, maskChar: string, maskLocation: 'start' | 'end' }"
      );

    const keys = Object.keys(payload);
    if (
      !keys.find(
        name => name === 'str' || name === 'maskLength' || name === 'maskChar'
      )
    )
      throw new Error(
        "Invalid argument properties, parameter should be of type object with type: { str: string, maskLength: number, maskChar: string, maskLocation: 'start' | 'end' }"
      );

    const { str, maskLength, maskChar, maskLocation } = payload;

    if (maskLength > str.length)
      throw new Error(
        'max length should not be greater than the string length to mask.'
      );

    if (maskLocation === 'end') {
      return (
        str.toString().slice(0, str.length - maskLength) +
        str
          .toString()
          .slice(str.length - maskLength, str.length)
          .replace(/./g, maskChar)
      );
    }

    return (
      str.toString().slice(0, maskLength).replace(/./g, maskChar) +
      str.toString().slice(maskLength)
    );
  } catch (err) {
    throw err;
  }
};

export const fullname = (obj: TFullName) => {
  const first: string =
    obj.FirstName || obj.firstName || obj['first-name'] || obj.first_name || '';

  const middle: string =
    obj.MiddleName ||
    obj.middleName ||
    obj['middle-name'] ||
    obj.middle_name ||
    '';

  const last: string =
    obj.LastName || obj.lastName || obj['last-name'] || obj.last_name || '';

  const mid = hasValue(middle) ? ` ${middle} ` : ' ';

  return first + mid + last;
};

export const uppercase = (str: string, set?: TUpperCase) => {
  switch (set) {
    case 'words':
      const arr = str.split(' ');

      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }

      return arr.join(' ');
    case 'sentence':
      return str.charAt(0).toUpperCase() + str.slice(1);
    case 'all':
      return str.toUpperCase();
    default:
      return str.toUpperCase();
  }
};

export const ellipses = (str: string, length: number = 0, cs?: string) => {
  return str.slice(0, length) + (cs ?? '...');
};
