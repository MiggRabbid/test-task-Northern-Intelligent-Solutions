export interface IRepoNode {
  id: string;
  name: string;
  createdAt: string;
  forkCount: number;
  stargazerCount: number;
  primaryLanguage: {
    name: string;
  } | null;
  updatedAt: string;
}

export interface IRepositoryEdge {
  node: IRepoNode;
}

export interface IPageInfo {
  endCursor: string;
  hasNextPage: boolean;
  startCursor: string;
  hasPreviousPage: boolean;
}

export interface ISearchData {
  repositoryCount: number;
  edges: IRepositoryEdge[];
  pageInfo: IPageInfo;
}

export interface ISearchResponse {
  data: { search: ISearchData };
}
