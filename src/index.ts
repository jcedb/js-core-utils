import * as boolean from './modules/boolean.module';
import * as strings from './modules/strings.module';
import * as number from './modules/number.module';
import * as objects from './modules/objects.module';
import * as arrays from './modules/arrays.module';
import * as functions from './modules/function.module';

export const { isArray, isObject, isType, isEven } = boolean;
export const { fullname, mask, uppercase, ellipses } = strings;
export const { getCurrencySymbol } = number;
export const { objectLoop, immutate } = objects;
export const { each, evenList, oddList } = arrays;
export const { Subject, Observable, doIf, tryCatch, sticky } = functions;
