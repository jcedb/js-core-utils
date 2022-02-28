import empty from 'is-empty';
import { TDataTypes } from '../types/datatypes.type';

export const isEmpty = (args: any) => {
  return empty(args);
};

export const hasValue = (args: any) => {
  return !empty(args);
};

export const isArray = (args: any) => {
  return Array.isArray(args);
};

export const isObject = (args: any) => {
  return typeof args === 'object';
};

export const isType = (args: any, type: TDataTypes) => {
  return typeof args === type;
};

export const isPlainObject = (obj: any) => {
  return typeof obj === 'object' && !Array.isArray(obj);
};
