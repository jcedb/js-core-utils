import {
  IFullNameCamel,
  IFullNameKebab,
  IFullNamePascal,
  IFullNamePlain,
  IFullNameSnake,
} from '../models/fullname.model';

export type TFullName = IFullNamePlain &
  IFullNamePascal &
  IFullNameCamel &
  IFullNameKebab &
  IFullNameSnake;
