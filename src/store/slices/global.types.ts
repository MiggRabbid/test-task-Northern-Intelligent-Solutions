/* eslint-disable no-unused-vars */
export interface IGlobalState {
  searchData: string;
  first: number;
  cursor: string | undefined;
  orderBy: TypeStateOrderBy;
}

export type TypeStateOrderBy = IOrderBy | undefined;

export interface IOrderBy {
  field: TypeOrderByFiled;
  direction: IDirectionOrderBy;
}

export enum TypeOrderByFiled {
  STARS = 'STARS',
  Forks = 'Forks',
  UPDATED_AT = 'UPDATED_AT',
}

export enum IDirectionOrderBy {
  ASC = 'ASC',
  DESC = 'DESC',
}
