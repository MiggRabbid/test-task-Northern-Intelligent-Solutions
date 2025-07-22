// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { githubApi } from './api';
import { actions as globalActions, globalReducer } from './slices/global.slice';

export const actions = { ...globalActions };

export const store = configureStore({
  reducer: {
    globalReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
