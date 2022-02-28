import * as boolean from './modules/boolean.module';
import * as strings from './modules/strings.module';
import * as number from './modules/number.module';
import * as objects from './modules/objects.module';
import * as arrays from './modules/arrays.module';
import * as functions from './modules/function.module';

export const { hasValue, isEmpty, isArray, isObject, isType } = boolean;
export const { fullname, mask, uppercase, ellipses } = strings;
export const { getCurrencySymbol } = number;
export const { objectLoop, immutate } = objects;
export const { each } = arrays;
export const { Subject, Observable, doIf, tryCatch } = functions;
