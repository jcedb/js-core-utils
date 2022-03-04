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

export const sticky = (target: string | HTMLElement) => {
  const isString = typeof target === 'string';
  const getElement = (isString ? document.querySelector(target) : target) as HTMLElement;
  const targetOffset = getElement.offsetHeight;

  const body = document.querySelector('body') as HTMLBodyElement;
  const style = getElement.style;

  window.onscroll = () => {
    if (window.scrollY > targetOffset) {
      style.position = 'fixed';
      style.top = '0';
      style.width = '100%';
      body.style.paddingTop = `${getElement.offsetHeight}px`;
    } else {
      style.position = '';
      style.top = '';
      style.width = '';
      body.style.paddingTop = '';
    }
  };
};
