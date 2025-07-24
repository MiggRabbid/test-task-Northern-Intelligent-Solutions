'use client';
import { Plug } from '@/shared/components';
import { Box } from '@mui/material';
import React from 'react';

const ReposItem = () => {
  const repos = false;

  return (
    <Box className="flex h-full w-4/12 bg-slate-100">
      {!repos && <Plug text="Выберите репозиторий" fontSize="text-base" />}

      {repos && <p>Репозиторий открыт</p>}
    </Box>
  );
};

export default React.memo(ReposItem);
