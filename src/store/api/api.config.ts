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
            createdAt
            forkCount
            stargazerCount
            primaryLanguage { name }
            updatedAt
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

export const GET_REPO_BY_ID_QUERY = `
  query($id: ID!) {
    node(id: $id) {
      ... on Repository {
        id
        name
        description
        forkCount
        stargazerCount
        updatedAt
        licenseInfo { name }
        primaryLanguage { name }
        owner { login }
        repositoryTopics(first: 10) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }
  }
`;
