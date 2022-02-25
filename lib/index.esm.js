import empty from 'is-empty';

var isEmpty$1 = function (args) {
    return empty(args);
};
var hasValue$1 = function (args) {
    return !empty(args);
};
var isArray$1 = function (args) {
    return Array.isArray(args);
};
var isObject$1 = function (args) {
    return typeof args === 'object';
};
var isType$1 = function (args, type) {
    return typeof args === type;
};

var mask$1 = function (payload) {
    try {
        if (!payload)
            throw new Error("Argument is required.");
        if (typeof payload !== "object")
            throw new Error("Invalid argument type, parameter should be of type object with type: { str: string, maskLength: number, maskChar: string, maskLocation: 'start' | 'end' }");
        var keys = Object.keys(payload);
        if (!keys.find(function (name) { return name === "str" || name === "maskLength" || name === "maskChar"; }))
            throw new Error("Invalid argument properties, parameter should be of type object with type: { str: string, maskLength: number, maskChar: string, maskLocation: 'start' | 'end' }");
        var str = payload.str, maskLength = payload.maskLength, maskChar = payload.maskChar, maskLocation = payload.maskLocation;
        if (maskLength && maskLength > str.length)
            throw new Error("max length should not be greater than the string length to mask.");
        if ((!maskLength && maskLocation))
            throw new Error("Mask length cannot be undefined if mask location is defined.");
        if ((maskLength && !maskLocation))
            throw new Error("Mask location cannot be undefined if mask length is defined.");
        if (maskLocation && maskLength) {
            if (maskLocation === "end") {
                return str.toString().slice(0, str.length - maskLength) + str.toString().slice(str.length - maskLength, str.length).replace(/./g, maskChar);
            }
            return str.toString().slice(0, maskLength).replace(/./g, maskChar) + str.toString().slice(maskLength);
        }
        return str.toString().replace(/./g, maskChar);
    }
    catch (err) {
        throw err;
    }
};
var fullname$1 = function (obj) {
    var first = obj.FirstName || obj.firstName || obj['first-name'] || obj.first_name || '';
    var middle = obj.MiddleName ||
        obj.middleName ||
        obj['middle-name'] ||
        obj.middle_name ||
        '';
    var last = obj.LastName || obj.lastName || obj['last-name'] || obj.last_name || '';
    var mid = hasValue$1(middle) ? " ".concat(middle, " ") : ' ';
    return first + mid + last;
};

var toCurrency$1 = function (currencyType) {
    try {
        if (typeof currencyType !== "object")
            throw new Error("Invalid argument type, parameter should be of type object with keys { value: number, currency: string, locale: string }");
        var keys = Object.keys(currencyType);
        if (!keys.find(function (name) { return name === "value" || name === "currency" || name === "locale"; }))
            throw new Error("Invalid argument keys, parameter should be of type object with keys { value: number, currency: string, locale: string }");
        var value = currencyType.value, currency = currencyType.currency, locale = currencyType.locale;
        var formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        });
        return formatter.format(value);
    }
    catch (err) {
        throw err;
    }
};

var objectLoop$1 = function (obj, callback) {
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        callback({ key: key, value: value });
    }
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Subject$1 = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.isFunction = function (fn) {
        return ((typeof fn == "function") ||
            (Object.prototype.toString.call(fn) == '[object Function]') ||
            ({}.toString.call(fn) == '[object Function]'));
    };
    /**
     *
     * @param fn is a function, or an array of function
     * @returns new batch of observers
     */
    Subject.prototype.subscribe = function (fn) {
        var _this = this;
        try {
            if (!this.isFunction(fn) && Object.keys(fn).length === 0)
                throw new Error("Invalid argument type, argument type should be a function.");
            var fns = Object.values(fn);
            if (fns.length)
                return fns.forEach(function (fnName) { return !_this.observers.find(function (targetFn) { return targetFn === fnName; }) ? _this.observers.push(fnName) : null; });
            if (this.observers.find(function (targetFn) { return targetFn === fn; }))
                return;
            return this.observers.push(fn);
        }
        catch (err) {
            throw err;
        }
    };
    /**
     *
     * @param fn is optional, it defined, it should be a function
     * @returns fires a call event to all observer if fn is not defined, and fires the fn function, if defined
     */
    Subject.prototype.fireObserver = function (fn) {
        var _this = this;
        try {
            if (fn && !this.isFunction(fn))
                throw new Error("Invalid argument type, argument type should be a function (argument is optional).");
            if (fn) {
                var targetObserver = this.observers.find(function (fnName) { return fnName === fn; });
                if (!targetObserver)
                    throw new Error("Invalid argument, function passed in the argument is not registered as an observer.");
                return targetObserver.call(this);
            }
            else {
                this.observers.forEach(function (fn) { return fn.call(_this); });
            }
        }
        catch (err) {
            throw err;
        }
    };
    return Subject;
}());
var ProxyUtil$1 = /** @class */ (function () {
    function ProxyUtil() {
        this.cache = {};
        this.expiry = 60000; /** <-- default expiry set to 1 minute */
    }
    /**
     *
     * @param key is the cache key
     * @returns a Promise<{ success: boolean, response: object | Array<object | string | number | any> | boolean | string }>
     */
    ProxyUtil.prototype.retrieveCache = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var time, cacheKeys, cacheDetails, _a, expiresIn, timeCreated, data;
            return __generator(this, function (_b) {
                try {
                    if (!key)
                        throw new Error("key parameter is required.");
                    if (typeof key !== "string")
                        throw new Error("Invalid argument type, key should be of type string.");
                    time = Date.now() * 1000;
                    cacheKeys = Object.keys(this.cache);
                    cacheDetails = cacheKeys.find(function (keyName) { return keyName === key; });
                    /** Cache key is found */
                    if (cacheDetails) {
                        _a = this.cache[key], expiresIn = _a.expiresIn, timeCreated = _a.timeCreated, data = _a.data;
                        if ((time - timeCreated) >= expiresIn) {
                            /** Cache has expired */
                            delete this.cache[key];
                            return [2 /*return*/, {
                                    success: false
                                }];
                        }
                        return [2 /*return*/, {
                                success: true,
                                response: data
                            }];
                    }
                    throw new Error("Cache key is not found.");
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     * @param keyName is the cache key, this will be used to retrieve the cache data
     * @param cachePayload is the object or array of data to save in cache
     * @param expiry is the custom expiration time in minute for the cache to expire
     * @returns a Promise<{ cached: boolean, message: string }>
     */
    ProxyUtil.prototype.saveCache = function (keyName, cachePayload, customExpiry) {
        return __awaiter(this, void 0, void 0, function () {
            var expiration, cacheData, isCached, now, cache, expiresIn, timeCreated;
            return __generator(this, function (_a) {
                try {
                    if (!keyName && !cachePayload)
                        throw new Error("keyName and cachePayload is required.");
                    expiration = customExpiry ? (customExpiry * 1000) : this.expiry;
                    cacheData = {
                        data: cachePayload,
                        timeCreated: Date.now() * 1000,
                        expiresIn: expiration
                    };
                    isCached = Object.keys(this.cache).find(function (cacheName) { return cacheName === keyName; });
                    if (!isCached) {
                        /** Create cache with the specified key name */
                        this.cache[keyName] = cacheData;
                        return [2 /*return*/, {
                                cached: true,
                                message: "Data is cached in key ".concat(keyName, ".")
                            }];
                    }
                    now = Date.now() * 1000;
                    cache = this.cache[keyName];
                    expiresIn = cache.expiresIn, timeCreated = cache.timeCreated;
                    if ((now - timeCreated) >= expiresIn) {
                        /**
                         * Cache already expired, delete cache key to free up allocated memory
                         * this is necessary because we do not know how big the data is stored in this memory
                         */
                        delete this.cache[keyName];
                        /**
                         * Reassign new key to cache
                         * In this way, we can allocate enough memory to this key
                         * that corresponds to the data or payload size
                         */
                        this.cache[keyName] = cacheData;
                        return [2 /*return*/, {
                                cached: true,
                                message: "Data is cached in key ".concat(keyName, ".")
                            }];
                    }
                    return [2 /*return*/, {
                            cached: false,
                            message: "key ".concat(keyName, " already existed on cache.")
                        }];
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    return ProxyUtil;
}());
var ternaryOperator$1 = function (condition, trueValue, falseValue) {
    return condition ? trueValue : falseValue !== null && falseValue !== void 0 ? falseValue : null;
};

var hasValue = hasValue$1, isEmpty = isEmpty$1, isArray = isArray$1, isObject = isObject$1, isType = isType$1;
var fullname = fullname$1, mask = mask$1;
var toCurrency = toCurrency$1;
var objectLoop = objectLoop$1;
var Subject = Subject$1, ternaryOperator = ternaryOperator$1, ProxyUtil = ProxyUtil$1;

export { ProxyUtil, Subject, fullname, hasValue, isArray, isEmpty, isObject, isType, mask, objectLoop, ternaryOperator, toCurrency };
