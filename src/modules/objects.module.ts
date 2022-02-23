export const objectLoop = (obj: any, callback: (...obj: any) => void) => {
  for (const [key, value] of Object.entries(obj)) {
    callback({ key, value });
  }
};
