export const each = (arr: any[], callback: (...args: any) => void) => {
  for (let index = 0; index < arr.length; index++) {
    const data = arr[index];

    callback(data, index);
  }
};
