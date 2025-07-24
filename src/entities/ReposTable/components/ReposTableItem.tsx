import { TableCell, type TableCellProps } from '@mui/material';

interface IReposTableItemProps extends TableCellProps {
  item: string | number;
}

const ReposTableItem = (props: IReposTableItemProps) => {
  const { item, ...otherProps } = props;

  return (
    <TableCell className="w-1/5! px-2! py-4! text-sm!" {...otherProps}>
      {item}
    </TableCell>
  );
};

export default ReposTableItem;
