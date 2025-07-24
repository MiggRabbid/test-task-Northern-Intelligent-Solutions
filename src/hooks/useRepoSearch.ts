import { getGlobalField } from '@/selectors';
import { useAppSelector } from './useAppSelector';
import { useSearchReposQuery } from '@/store/api';

const useRepoSearch = () => {
  const searchData = useAppSelector(getGlobalField('searchData'));
  const cursor = useAppSelector(getGlobalField('cursor'));
  const first = useAppSelector(getGlobalField('first'));
  const orderBy = useAppSelector(getGlobalField('orderBy'));

  const { data: repos, isFetching } = useSearchReposQuery(
    { query: searchData, first, after: cursor, orderBy },
    { skip: !searchData || searchData.length === 0 },
  );

  return { repos, isFetching };
};

export { useRepoSearch };
