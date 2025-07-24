import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL, method, routes, SEARCH_REPOS_QUERY } from './api.config';

import { ISearchData, ISearchResponse } from './api.types';
import { IOrderBy } from '../slices/global.types';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  tagTypes: ['Repo'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    searchRepos: build.query<
      ISearchData,
      {
        query: string;
        first?: number;
        after?: string;
        orderBy?: IOrderBy;
      }
    >({
      query: ({ query, first = 30, after, orderBy }) => ({
        url: routes.graphql,
        method: method.POST,
        body: {
          query: SEARCH_REPOS_QUERY,
          variables: { query, first, after, orderBy },
        },
      }),
      transformResponse: (response: ISearchResponse): ISearchData => {
        return response.data.search;
      },
    }),
  }),
});

export const { useSearchReposQuery } = githubApi;
