import { TFunction } from "./../types/function.type";
export declare class Subject {
    private observers;
    constructor();
    private isFunction;
    /**
     *
     * @param fn is a function, or an array of function
     * @returns new batch of observers
     */
    subscribe(fn: Function): number | void;
    /**
     *
     * @param fn is optional, it defined, it should be a function
     * @returns fires a call event to all observer if fn is not defined, and fires the fn function, if defined
     */
    fireObserver(fn?: Function): any;
}
export declare class ProxyUtil {
    private cache;
    private expiry;
    constructor();
    /**
     *
     * @param key is the cache key
     * @returns a Promise<{ success: boolean, response: object | Array<object | string | number | any> | boolean | string }>
     */
    retrieveCache(key: string): Promise<{
        success: boolean;
        response?: object | Array<any> | boolean | string;
    }>;
    /**
     *
     * @param keyName is the cache key, this will be used to retrieve the cache data
     * @param cachePayload is the object or array of data to save in cache
     * @param expiry is the custom expiration time in minute for the cache to expire
     * @returns a Promise<{ cached: boolean, message: string }>
     */
    saveCache(keyName: string, cachePayload: TFunction, customExpiry?: number): Promise<{
        cached: boolean;
        message: string;
    }>;
}
export declare const ternaryOperator: (condition: boolean, trueValue: any, falseValue?: any) => any;
