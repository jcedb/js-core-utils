import * as boolean from "./modules/boolean.module";
import * as strings from "./modules/strings.module";
import * as number from "./modules/number.module"

export const { hasValue, isEmpty } = boolean;
export const { fullname, mask } = strings;
export const { getCurrencySymbol } = number
