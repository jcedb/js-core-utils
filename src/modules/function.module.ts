export class Subject {
  observers: Array<Function>;

  constructor() {
    this.observers = [];
  }

  isFunction(fn: Function) {
    return (
      typeof fn == 'function' ||
      Object.prototype.toString.call(fn) == '[object Function]' ||
      {}.toString.call(fn) == '[object Function]'
    );
  }

  subscribe(fn: Function) {
    try {
      if (!this.isFunction(fn))
        throw new Error(
          'Invalid argument type, argument type should be a function.'
        );

      this.observers.push(fn);
    } catch (err) {
      throw err;
    }
  }
}

export class Observable extends Subject {
  constructor() {
    super();
    console.log(this.observers);
  }

  fireObserver(fn?: any) {
    try {
      if (fn && !this.isFunction(fn))
        throw new Error(
          'Invalid argument type, argument type should be a function (argument is optional).'
        );

      if (fn) {
        const targetObserver = this.observers.find(fnName => fnName === fn);
        console.log(targetObserver);

        if (!targetObserver)
          throw new Error(
            'Invalid argument, function passed in the argument is not registered as an observer.'
          );

        return targetObserver.call(this);
      }
    } catch (err) {
      throw err;
    }
  }
}

export const doIf = (condition: boolean, trueValue: any, falseValue?: any) => {
  return condition ? trueValue : falseValue ?? null;
};

export const tryCatch = (
  tryLogic: () => any,
  catchLogic?: (error: any) => any
) => {
  try {
    tryLogic();
  } catch (error) {
    if (catchLogic) {
      catchLogic(error);
    } else console.error(error);
  }
};

// export const toBase64 = (
//   file: File,
//   callback: (result: string | ArrayBuffer | null) => void
// ) => {
//   const reader = new FileReader();
//   reader.onloadend = function () {
//     callback(reader.result);
//   };
//   reader.readAsDataURL(file);
// };
