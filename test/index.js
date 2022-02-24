/** This file contains the unit tests for all integrated methods in this library */

const {
  getCurrencySymbol,
  mask,
  Subject,
  Observable,
  isEmpty,
  hasValue,
  uppercase
} = require('../lib/index');

/**
 *
 * @method getCurrencySymbol() requires an argument as an object, with keys:
 * value = the value of type number
 * currency = currency type of type string, i.e, USD, PHP, etc..
 * locale = currency locale of type string, i,e, en-US, en-CA, etc..
 */
const convertToCurrency = getCurrencySymbol({
  value: 100,
  currency: 'USD',
  locale: 'en-US'
});

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
const maskPassword = mask({
  str: 'mypassword123',
  maskLength: 'mypassword123'.length,
  maskChar: '*',
  maskLocation: 'start'
}); /** This will mask the whole string */

const maskStart = mask({
  str: 'maskme',
  maskLength: 4,
  maskChar: '*',
  maskLocation: 'start'
}); /** This will mask the first 4 characters of the string */

const maskEnd = mask({
  str: 'memask',
  maskLength: 4,
  maskChar: '*',
  maskLocation: 'end'
}); /** This will mask the last 4 characters of the string */

const subject = new Subject();
const observable = new Observable();

const observable1 = () => {
  console.log("Hola! I'm the first observable.");
};

/** Test Executor */
(() => {
  // prettier-ignore
  console.log(
    /** Put logic here */

    

  );
})();
