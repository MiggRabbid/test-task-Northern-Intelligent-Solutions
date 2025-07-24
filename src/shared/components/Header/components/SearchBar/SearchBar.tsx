'use client';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

import { useAppActions } from '@/hooks';

export const SearchBar = () => {
  const { setGlobalField } = useAppActions();

  const [value, setValue] = useState('');

  const handelClickOnSearch = () => {
    setGlobalField({ field: 'searchData', value });
  };

  return (
    <div className="flex w-full gap-2">
      <div className="flex w-6/10 gap-2">
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Поисковый запрос"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-sm! bg-white"
        />
      </div>

      <Button variant="contained" color="primary" onClick={handelClickOnSearch}>
        Искать
      </Button>
    </div>
  );
};

export const MemoSearchBar = React.memo(SearchBar);
