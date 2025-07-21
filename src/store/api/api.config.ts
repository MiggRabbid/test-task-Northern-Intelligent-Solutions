export const BASE_URL = 'https://api.github.com';

export const routes = {
  graphql: '/graphql',
} as const;

export const method = { POST: 'POST' } as const;

export const SEARCH_REPOS_QUERY = `
  query($query: String!, $first: Int, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            description
            forkCount
            stargazerCount
            primaryLanguage { name }
            updatedAt
            licenseInfo { name }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
      }
    }
  }
`;
