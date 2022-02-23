/** This file contains the unit tests for all integrated methods in this library */

const { toCurrency, mask, Subject, Observable } = require("./../lib/index")

/**
 * 
 * @method toCurrency() requires an argument as an object, with keys:
 * value = the value of type number
 * currency = currency type of type string, i.e, USD, PHP, etc..
 * locale = currency locale of type string, i,e, en-US, en-CA, etc..
 */
const convertToCurrency = toCurrency({ value: 100, currency: "USD", locale: "en-US" })

/**
 * 
 * @method mask() requires an argument as an object, with keys:
 * str = the string to mask
 * maskLength = the number of characters to mask
 * maskChar = the mask symbol to use
 * maskLocation = the string location to mask, i.e, start of string or end of string
 * 
 * ### Examples
 */
const maskAll = mask({ 
	str: "mypassword123",
	maskChar: "*"
}) /** This will mask the whole string */

const maskStart = mask({
	str: "maskme", 
	maskLength: 4,
	maskChar: "*",
	maskLocation: "start"
}) /** This will mask the first 4 characters of the string */

const maskEnd = mask({
	str: "memask", 
	maskLength: 4,
	maskChar: "*",
	maskLocation: "end"
}) /** This will mask the last 4 characters of the string */

console.log(`Mask all: ${ maskAll }`)
console.log(`Mask start: ${ maskStart }`)
console.log(`Mask end: ${ maskEnd }`)
console.log(`To currency: ${ convertToCurrency }`)