import { TDataTypes } from "../types/datatypes.type";

const empty = require("is-empty");

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
  return typeof args === "object";
};

export const isType = (args: any, type: TDataTypes) => {
  return typeof args === type;
};
