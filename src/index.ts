import * as boolean from "./modules/boolean.module";
import * as strings from "./modules/strings.module";
import * as objects from "./modules/objects.module";

export const { hasValue, isEmpty, isArray, isObject, isType } = boolean;
export const { fullname } = strings;
export const { objectLoop } = objects;
