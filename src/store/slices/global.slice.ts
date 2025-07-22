import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { initialGlobalState } from './global.config';

import type { IGlobalState } from './global.types';

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState: initialGlobalState,
  reducers: {
    /*
     * Global slice
     */
    // Изменяем конкретное
    setGlobalField: <K extends keyof IGlobalState>(
      state: IGlobalState,
      action: PayloadAction<{ field: K; value: IGlobalState[K] }>,
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    /*
     * Очищаем состояние
     */
    clearGlobalState: () => {
      return { ...initialGlobalState };
    },
  },
});

export const { actions } = globalSlice;
export const globalReducer = globalSlice.reducer;
