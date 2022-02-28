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

export const isObject = (obj: any) => {
  return typeof obj === 'object' && !Array.isArray(obj);
};

export const isType = (args: any, type: TDataTypes) => {
  return typeof args === type;
};
