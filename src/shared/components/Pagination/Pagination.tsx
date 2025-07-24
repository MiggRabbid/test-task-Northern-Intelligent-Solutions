'use client';
import { TablePagination } from '@mui/material';
import { useState } from 'react';

interface IPaginationProps {
  disabled: boolean;
  count: number;
  // eslint-disable-next-line no-unused-vars
  clickOnChangePage: (currPage: number, newPage: number) => void;
  // eslint-disable-next-line no-unused-vars
  clickOnRowsPerPage: (newRowPerPage: number) => void;
}

const Pagination = (props: IPaginationProps) => {
  const { disabled, count, clickOnChangePage, clickOnRowsPerPage } = props;
  const rowsPerPageOptions = [10, 20, 30] as const;
  const [rowPerPage, setRowPerPage] = useState<(typeof rowsPerPageOptions)[number]>(
    rowsPerPageOptions[0],
  );

  const [currPage, setCurrPage] = useState<number>(0);

  const onPageChange = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    clickOnChangePage(currPage, newPage);
    setCurrPage(newPage);
  };

  const onRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRowPerPage = parseInt(
      event.target.value,
      10,
    ) as (typeof rowsPerPageOptions)[number];
    clickOnRowsPerPage(newRowPerPage);
    setRowPerPage(newRowPerPage);
  };

  return (
    <TablePagination
      disabled={disabled}
      className="w-full! shrink-0!"
      component="div"
      rowsPerPageOptions={rowsPerPageOptions}
      count={count}
      rowsPerPage={rowPerPage}
      page={currPage}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};

export default Pagination;
