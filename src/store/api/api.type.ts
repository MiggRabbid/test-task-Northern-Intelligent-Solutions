export interface IRepoNode {
  id: string;
  name: string;
  description: string | null;
  forkCount: number;
  stargazerCount: number;
  primaryLanguage: { name: string } | null;
  updatedAt: string;
  licenseInfo: { name: string } | null;
}

export interface ISearchResponse {
  data: {
    search: {
      repositoryCount: number;
      edges: { node: IRepoNode }[];
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
        startCursor: string;
        hasPreviousPage: boolean;
      };
    };
  };
}
