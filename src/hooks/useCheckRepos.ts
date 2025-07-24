import { getGlobalField } from '@/selectors';
import { useAppSelector } from './useAppSelector';
import { githubApi } from '@/store/api';

const selectSearchReposResult = githubApi.endpoints.searchRepos.select;

const useCheckRepos = () => {
  const searchData = useAppSelector(getGlobalField('searchData'));
  const cursor = useAppSelector(getGlobalField('cursor'));
  const first = useAppSelector(getGlobalField('first'));
  const orderBy = useAppSelector(getGlobalField('orderBy'));

  const repos = useAppSelector(
    selectSearchReposResult({ query: searchData, first, after: cursor, orderBy }),
  );

  return !repos?.isUninitialized;
};

export { useCheckRepos };
