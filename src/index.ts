import * as boolean from "./modules/boolean.module";
import * as strings from "./modules/strings.module";
import * as number from "./modules/number.module"
import * as functions from "./modules/function.module"

export const { hasValue, isEmpty } = boolean;
export const { fullname, mask } = strings;
export const { toCurrency } = number
export const { Subject, Observable } = functions
