import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL, method, routes, SEARCH_REPOS_QUERY } from './api.config';

import { ISearchResponse } from './api.type';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    searchRepos: build.query<
      ISearchResponse['data']['search'],
      {
        query: string;
        first?: number;
        after?: string;
        orderBy?: { field: 'STARS' | 'Forks' | 'UPDATED_AT'; direction: 'ASC' | 'DESC' };
      }
    >({
      query: ({ query, first = 10, after, orderBy }) => ({
        url: routes.graphql,
        method: method.POST,
        body: {
          query: SEARCH_REPOS_QUERY,
          variables: { query, first, after, orderBy },
        },
      }),
      transformResponse: (response: ISearchResponse) => response.data.search,
    }),
  }),
});

export const { useSearchReposQuery } = githubApi;
