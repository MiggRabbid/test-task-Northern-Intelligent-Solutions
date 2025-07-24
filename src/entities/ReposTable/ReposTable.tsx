'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
} from '@mui/material';

import { useAppActions, useRepoSearch } from '@/hooks';
import { reposTableHeaderRow } from './config';
import { getFormateDate } from '@/shared/utils';

import { Loader, Plug } from '@/shared/components';
import ReposTableRow from './components/ReposTableRow';

import { IRepositoryEdge } from '@/store/api/api.types';

const ReposTable = () => {
  const { setGlobalField } = useAppActions();
  const { repos, isFetching } = useRepoSearch();

  const rowsPerPageOptions = [10, 20, 30] as const;
  const [rowPerPage, setRowPerPage] = useState<(typeof rowsPerPageOptions)[number]>(
    rowsPerPageOptions[0],
  );
  const [currPage, setCurrPage] = useState<number>(0);

  useEffect(() => {
    console.log(repos);
  }, [repos]);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    if (currPage < newPage && !!repos?.pageInfo.endCursor) {
      setGlobalField({
        field: 'cursor',
        value: repos.pageInfo.endCursor,
      });
    }

    if (currPage > newPage && !!repos?.pageInfo.startCursor) {
      setGlobalField({
        field: 'cursor',
        value: repos.pageInfo.startCursor,
      });
    }

    setCurrPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRowPerPage = parseInt(
      event.target.value,
      10,
    ) as (typeof rowsPerPageOptions)[number];
    setRowPerPage(newRowPerPage);

    setGlobalField({
      field: 'first',
      value: newRowPerPage,
    });
  };

  if (!repos && !isFetching) {
    return <Plug text="Добро пожаловать" fontSize="text-4xl" />;
  }

  return (
    <Box className="w-8/12 grow-1 px-8 py-6">
      {!repos && isFetching && <Loader size={100} />}

      {!!repos && (
        <Box className="flex h-full flex-col justify-between gap-0">
          <TableContainer
            className="overflow-y-auto!"
            sx={{ maxHeight: 'calc(100% - 54px) !important' }}
          >
            <Table aria-label="repos table" stickyHeader>
              <TableHead>
                <ReposTableRow type="header" id="header" rows={reposTableHeaderRow} />
              </TableHead>
              <TableBody>
                {repos.edges.map((row: IRepositoryEdge) => {
                  const {
                    id,
                    name,
                    primaryLanguage,
                    forkCount,
                    stargazerCount,
                    updatedAt,
                  } = row.node;
                  return (
                    <ReposTableRow
                      type="body"
                      id={id}
                      rows={[
                        name,
                        primaryLanguage?.name || '-',
                        forkCount,
                        stargazerCount,
                        getFormateDate(updatedAt),
                      ]}
                      key={`repos-${id}`}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Можно русифицировать через провайдер Темы MUI */}
          <TablePagination
            disabled={isFetching}
            className="w-full! shrink-0!"
            component="div"
            rowsPerPageOptions={rowsPerPageOptions}
            count={8814381}
            rowsPerPage={rowPerPage}
            page={currPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      )}
    </Box>
  );
};

export default React.memo(ReposTable);
