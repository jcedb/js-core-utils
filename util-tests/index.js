/** This file contains the unit tests for all integrated methods in this library */

const { toCurrency, mask, Subject } = require("./../lib/index")

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

/**
 * 
 * @class Observable() allows you to add multiple observable functions from your view
 * and will later trigger it whenever you want using the fireObserver method
 */
const observers = new Subject()

/** Sample observable functions */
const observerFn1 = () => console.log("Hola! first observer!")
const observerFn2 = () => console.log("Hola! second observer!")
const observerFn3 = () => console.log("Hola! third observer!")

/**
 * 
 * @method subscribe() will take a single argument with type of either array of functions or a single function
 */
observers.subscribe([observerFn1, observerFn2, observerFn3])

/**
 * 
 * @method fireObserver() argument is optional, you can provide a function name to specify which observer you want to trigger
 */
observers.fireObserver(observerFn2)

console.log(`Mask all: ${ maskAll }`)
console.log(`Mask start: ${ maskStart }`)
console.log(`Mask end: ${ maskEnd }`)
console.log(`To currency: ${ convertToCurrency }`)