'use client';

import React from 'react';
import { Box, Chip } from '@mui/material';

import { useAppSelector, useCheckRepos } from '@/hooks';
import { getGlobalField } from '@/selectors';
import { useGetRepoByIdQuery } from '@/store/api/api';

import { Loader, Plug } from '@/shared/components';
import Image from 'next/image';
import { formatNumber } from '@/shared/utils';

const ReposItem = () => {
  const isRepos = useCheckRepos();
  const openRepos = useAppSelector(getGlobalField('openRepos'));

  const { data: repos, isFetching } = useGetRepoByIdQuery(openRepos || '', {
    skip: !openRepos,
  });

  if (!isRepos) return null;

  return (
    <Box className="flex h-full w-4/12 bg-slate-100 p-6">
      {!repos && !isFetching && <Plug text="Выберите репозиторий" fontSize="text-base" />}

      {isFetching && <Loader size={50} />}

      {repos && !isFetching && (
        <Box className="flex w-full flex-col gap-4">
          <Box className="w-full">
            <h1 className="text-3xl text-slate-900">{repos.name}</h1>
          </Box>

          <Box className="flex w-full justify-between gap-4">
            <Chip
              label={repos.primaryLanguage?.name}
              color="primary"
              className="w-fit! rounded-full! px-1! py-2! text-xs!"
            />

            <Box className="align-center flex h-5 w-fit justify-center gap-2">
              <Image
                src="/icons/star.svg"
                width={18}
                height={18}
                alt="stars"
                className="h-full"
              />
              <p className="align-middle! text-sm leading-5!">
                {formatNumber(repos.stargazerCount)}
              </p>
            </Box>
          </Box>
          <Box className="align-center flex h-fit w-full flex-wrap justify-start gap-2">
            {repos.repositoryTopics.nodes.map((item, index) => (
              <Chip
                key={`${repos.id}-repositoryTopics-${index}`}
                label={item.topic.name}
                className="w-fit! rounded-full! px-1! py-2! text-xs!"
              />
            ))}
          </Box>

          <Box className="align-center mt-2 flex h-fit w-full flex-wrap justify-start gap-2">
            <p>{repos.licenseInfo?.name}</p>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default React.memo(ReposItem);
