export class Subject {
	private observers: Array<Function>

	constructor () {
		this.observers = []
	}

	private isFunction(fn: Function) {
		return (
			(typeof fn == "function") ||
			(Object.prototype.toString.call(fn) == '[object Function]') ||
			({}.toString.call(fn) == '[object Function]')
		)
	}

	/**
	 * 
	 * @param fn is a function, or an array of function
	 * @returns new batch of observers
	 */
	subscribe(fn: Function) {
		try {
			if (!this.isFunction(fn) && Object.keys(fn).length === 0) throw new Error("Invalid argument type, argument type should be a function.")

			const fns = Object.values(fn)

			if (fns.length) return fns.forEach((fnName: any) => !this.observers.find(targetFn => targetFn === fnName) ? this.observers.push(fnName) : null)
			if (this.observers.find(targetFn => targetFn === fn)) return

			return this.observers.push(fn)
		} catch (err) {
			throw err
		}
	}

	/**
	 * 
	 * @param fn is optional, it defined, it should be a function
	 * @returns fires a call event to all observer if fn is not defined, and fires the fn function, if defined
	 */
	fireObserver(fn?: Function) {
		try {
			if (fn && !this.isFunction(fn)) throw new Error("Invalid argument type, argument type should be a function (argument is optional).")
		
			if (fn) {
				const targetObserver = this.observers.find(fnName => fnName === fn)
				
				if (!targetObserver) throw new Error("Invalid argument, function passed in the argument is not registered as an observer.")
				
				return targetObserver.call(this)
			} else {
				this.observers.forEach(fn => fn.call(this))
			}
		} catch (err) {
			throw err
		}
	}
}