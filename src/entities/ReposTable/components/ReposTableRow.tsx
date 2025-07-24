import { TableRow } from '@mui/material';
import ReposTableItem from './ReposTableItem';
import { useAppActions } from '@/hooks';

interface IReposTableRowProps {
  type: 'header' | 'body';
  id: string | number;
  rows: Array<string | number>;
}

const ReposTableRow = (props: IReposTableRowProps) => {
  const { type, id, rows } = props;
  const isBodyRow = type === 'body';

  const { setGlobalField } = useAppActions();

  const handelOnClick = () => {
    if (!id) return;
    setGlobalField({
      field: 'openRepos',
      value: id,
    });
  };

  return (
    <TableRow
      className={`hover w-full! select-none hover:bg-slate-50 ${isBodyRow && 'cursor-pointer!'}`}
      onClick={isBodyRow ? handelOnClick : undefined}
    >
      {rows.map((item, index) => {
        return (
          <ReposTableItem
            item={item}
            key={`repos-${id}-${index}`}
            variant={isBodyRow ? 'body' : 'head'}
          />
        );
      })}
    </TableRow>
  );
};

export default ReposTableRow;
