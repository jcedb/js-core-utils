import { TFunction } from "./../types/function.type"
import { ICache } from "./../models/function.model"

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

export class ProxyUtil {
	private cache: any
	private expiry: number

	constructor () {
		this.cache = {}
		this.expiry = 60000 /** <-- default expiry set to 1 minute */
	}

	/**
	 * 
	 * @param key is the cache key
	 * @returns a Promise<{ success: boolean, response: object | Array<object | string | number | any> | boolean | string }>
	 */
	async retrieveCache(key: string): Promise<{ success: boolean, response?: object | Array<any> | boolean | string }> {
		try {
			if (!key) throw new Error("key parameter is required.")
			if (typeof key !== "string") throw new Error("Invalid argument type, key should be of type string.")

			const time = Date.now() * 1000

			const cacheKeys = Object.keys(this.cache)
			const cacheDetails = cacheKeys.find(keyName => keyName === key)

			/** Cache key is found */
			if (cacheDetails) {
				const { expiresIn, timeCreated, data }: ICache = this.cache[key]

				if ((time - timeCreated) >= expiresIn) {
					/** Cache has expired */
					delete this.cache[key]

					return {
						success: false
					}
				}

				return {
					success: true,
					response: data
				}
			}

			throw new Error("Cache key is not found.")
		} catch (err) {
			throw err
		}
	}

	/**
	 * 
	 * @param keyName is the cache key, this will be used to retrieve the cache data
	 * @param cachePayload is the object or array of data to save in cache
	 * @param expiry is the custom expiration time in minute for the cache to expire
	 * @returns a Promise<{ cached: boolean, message: string }>
	 */
	async saveCache(keyName: string, cachePayload: TFunction, customExpiry?: number): Promise<{ cached: boolean, message: string }> {
		try {
			if (!keyName && !cachePayload) throw new Error("keyName and cachePayload is required.")

			const expiration = customExpiry ? (customExpiry * 1000) : this.expiry

			/** Create cache payload */
			const cacheData: TFunction = {
				data: cachePayload,
				timeCreated: Date.now() * 1000,
				expiresIn: expiration
			}

			/** Check if data is already cached */
			const isCached = Object.keys(this.cache).find(cacheName => cacheName === keyName)

			if (!isCached) {
				/** Create cache with the specified key name */
				this.cache[keyName] = cacheData

				return {
					cached: true,
					message: `Data is cached in key ${ keyName }.`
				}
			}

			/** Data is cached, check if it has already expired */
			const now: number = Date.now() * 1000
			const cache: ICache = this.cache[keyName]

			const { expiresIn, timeCreated } = cache

			if ((now - timeCreated) >= expiresIn) {
				/**
				 * Cache already expired, delete cache key to free up allocated memory
				 * this is necessary because we do not know how big the data is stored in this memory
				 */
				delete this.cache[keyName]

				/**
				 * Reassign new key to cache
				 * In this way, we can allocate enough memory to this key
				 * that corresponds to the data or payload size
				 */
				this.cache[keyName] = cacheData

				return {
					cached: true,
					message: `Data is cached in key ${ keyName }.`
				}
			}

			return {
				cached: false,
				message: `key ${ keyName } already existed on cache.`
			}
		} catch (err) {
			throw err
		}
	}
}

export const ternaryOperator = (
  condition: boolean,
  trueValue: any,
  falseValue?: any
) => {
  return condition ? trueValue : falseValue ?? null;
};