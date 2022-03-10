export const each = (arr: any[], callback: (...args: any) => void) => {
  for (let index = 0; index < arr.length; index++) {
    const data = arr[index];

    callback(data, index);
  }
};

export const evenList = (arr: any[]) =>
  arr.filter((_el: any, index: number) => index % 2 === 0);

export const oddList = (arr: any[]) =>
  arr.filter((_el: any, index: number) => index % 2 !== 0);
