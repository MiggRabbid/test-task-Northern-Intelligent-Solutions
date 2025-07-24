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

export interface IRepoById {
  id: string;
  name: string;
  description: string;
  forkCount: number;
  stargazerCount: number;
  updatedAt: string;
  licenseInfo: IName | null;
  primaryLanguage: IName | null;
  owner: { login: string };
  repositoryTopics: {
    nodes: {
      topic: IName;
    }[];
  };
}

export interface IRepoByIdResponse {
  data: {
    node: IRepoById;
  };
}

export interface IName {
  name: string;
}
