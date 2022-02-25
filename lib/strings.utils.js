"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mask = void 0;
const mask = function (payload) {
    try {
        if (!payload)
            throw new Error("Argument is required.");
        if (typeof payload !== "object")
            throw new Error("Invalid argument type, parameter should be of type object with type: { str: string, maskLength: number, maskChar: string, maskLocation: 'start' | 'end' }");
        const keys = Object.keys(payload);
        if (!keys.find(name => name === "str" || name === "maskLength" || name === "maskChar"))
            throw new Error("Invalid argument properties, parameter should be of type object with type: { str: string, maskLength: number, maskChar: string, maskLocation: 'start' | 'end' }");
        const { str, maskLength, maskChar, maskLocation } = payload;
        if (maskLength > str.length)
            throw new Error("max length should not be greater than the string length to mask.");
        if (maskLocation === "end") {
            return str.toString().slice(0, str.length - maskLength) + str.toString().slice(str.length - maskLength, str.length).replace(/./g, maskChar);
        }
        return str.toString().slice(0, maskLength).replace(/./g, maskChar) + str.toString().slice(maskLength);
    }
    catch (err) {
        throw err;
    }
};
exports.mask = mask;