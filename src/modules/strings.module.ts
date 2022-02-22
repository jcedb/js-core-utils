import { TFullName } from "../types/fullname.type";
import { hasValue } from "./boolean.module";

export const fullname = (obj: TFullName) => {
  const first: string =
    obj.FirstName || obj.firstName || obj["first-name"] || obj.first_name || "";

  const middle: string =
    obj.MiddleName ||
    obj.middleName ||
    obj["middle-name"] ||
    obj.middle_name ||
    "";

  const last: string =
    obj.LastName || obj.lastName || obj["last-name"] || obj.last_name || "";

  const mid = hasValue(middle) ? ` ${middle} ` : " ";

  return first + mid + last;
};
