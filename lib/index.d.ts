import * as functions from './modules/function.module';
export declare const hasValue: (args: any) => boolean, isEmpty: (args: any) => boolean, isArray: (args: any) => boolean, isObject: (args: any) => boolean, isType: (args: any, type: import("./types/datatypes.type").TDataTypes) => boolean;
export declare const fullname: (obj: import("./types/fullname.type").TFullName) => string, mask: (payload: import("./models/string.model").IMask) => string;
export declare const toCurrency: (currencyType: import("./models/number.model").ICurrencyFormat) => string;
export declare const objectLoop: (obj: any, callback: (...obj: any) => void) => void;
export declare const Subject: typeof functions.Subject, ternaryOperator: (condition: boolean, trueValue: any, falseValue?: any) => any, ProxyUtil: typeof functions.ProxyUtil;
