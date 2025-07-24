import { TableRow } from '@mui/material';
import ReposTableItem from './ReposTableItem';

interface IReposTableRowProps {
  type: 'header' | 'body';
  id: string | number;
  rows: Array<string | number>;
}

const ReposTableRow = (props: IReposTableRowProps) => {
  const { type, id, rows } = props;

  const handelOnClick = () => {
    console.log('click');
  };

  return (
    <TableRow
      className="w-full! hover:bg-slate-50"
      onClick={type === 'header' ? undefined : handelOnClick}
    >
      {rows.map((item, index) => {
        return <ReposTableItem item={item} key={`repos-${id}-${index}`} />;
      })}
    </TableRow>
  );
};

export default ReposTableRow;
