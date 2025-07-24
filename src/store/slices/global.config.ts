import { IDirectionOrderBy, TypeOrderByFiled, type IGlobalState } from './global.types';

export const initialGlobalState: IGlobalState = {
  openRepos: null,
  searchData: '',
  first: 10,
  cursor: undefined,
  orderBy: { field: TypeOrderByFiled.STARS, direction: IDirectionOrderBy.DESC },
};
