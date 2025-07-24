import { githubApi } from '@/store/api';
/*
 * Global slice
 */
// (Global) Получаем поля слайса
export const selectSearchReposResult = githubApi.endpoints.searchRepos.select;
