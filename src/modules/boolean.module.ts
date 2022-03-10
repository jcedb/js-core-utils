import empty from 'is-empty';
import { TDataTypes } from '../types/datatypes.type';

export const isEmpty = (args: any) => empty(args);

export const hasValue = (args: any) => !empty(args);

export const isArray = (args: any) => Array.isArray(args);

export const isObject = (obj: any) =>
  typeof obj === 'object' && !Array.isArray(obj);

export const isType = (args: any, type: TDataTypes) => typeof args === type;

export const isEven = (args: number) => args % 2 === 0;
