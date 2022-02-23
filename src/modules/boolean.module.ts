import empty from "is-empty"

export const isEmpty = (args: any) => {
  return empty(args);
};

export const hasValue = (args: any) => {
  return !empty(args);
};
