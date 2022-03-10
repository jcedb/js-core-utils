import { EObjectError } from '../enums/error.enums';

const isPlainObject = (obj: any): boolean => {
  return typeof obj === 'object' && !Array.isArray(obj);
};

export const objectLoop = (obj: any, callback: (...args: any) => void) => {
  try {
    if (!isPlainObject(obj)) throw EObjectError.NOT_OBJECT;

    const arr = Object.entries(obj);

    for (let index = 0; index < arr.length; index++) {
      const [key, value] = arr[index];

      callback({ key, value }, index);
    }
  } catch (error) {
    console.error(error);

    return;
  }
};

export const immutate = (obj: any) => {
  try {
    if (!isPlainObject(obj)) throw EObjectError.NOT_OBJECT;

    return Object.freeze(obj);
  } catch (error) {
    console.error(error);

    return;
  }
};
