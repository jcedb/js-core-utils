import { TNumber } from "./../types/number.type"

export const getCurrencySymbol = function(currencyType: TNumber) {
	try {
		if (typeof currencyType !== "object") throw new Error("Invalid argument type, parameter should be of type object with keys { value: number, currency: string, locale: string }")
		
		const keys = Object.keys(currencyType)
		if (!keys.find(name => name === "value" || name === "currency" || name === "locale")) throw new Error("Invalid argument keys, parameter should be of type object with keys { value: number, currency: string, locale: string }")
	
		const { value, currency, locale } = currencyType

		const formatter = new Intl.NumberFormat(locale, {
			style: "currency",
			currency
		})

		return formatter.format(value)
	} catch (err) {
		throw err
	}
}