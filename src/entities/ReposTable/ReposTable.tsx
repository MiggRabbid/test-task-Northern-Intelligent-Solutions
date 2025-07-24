'use client';
import React from 'react';
import { Box, Table, TableBody, TableContainer, TableHead } from '@mui/material';

import { useAppActions, useRepoSearch } from '@/hooks';
import { reposTableHeaderRow } from './config';
import { getFormateDate } from '@/shared/utils';

import { Loader, Pagination, Plug } from '@/shared/components';
import ReposTableRow from './components/ReposTableRow';

import { IRepositoryEdge } from '@/store/api/api.types';

const ReposTable = () => {
  const { setGlobalField } = useAppActions();
  const { repos, isFetching } = useRepoSearch();

  const clickOnChangePage = (currPage: number, newPage: number) => {
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
  };

  const clickOnRowsPerPage = (newRowPerPage: number) => {
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
          <Pagination
            disabled={isFetching}
            count={8814381}
            clickOnChangePage={clickOnChangePage}
            clickOnRowsPerPage={clickOnRowsPerPage}
          />
        </Box>
      )}
    </Box>
  );
};

export default React.memo(ReposTable);
