export const objectLoop = (obj: any, callback: (...args: any) => void) => {
  const arr = Object.entries(obj);

  for (let index = 0; index < arr.length; index++) {
    const [key, value] = arr[index];

    callback({ key, value }, index);
  }
};
