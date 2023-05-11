export declare function getMovies(params?: QueryParams): Promise<Movie[]>;

export declare function getMovieById(id: string): Promise<Movie | null>;

export declare function getMovieQuotes(
  id: string,
  params?: QueryParams
): Promise<APIResponse>;

export declare function getQuotes(params?: QueryParams): Promise<APIResponse>;

export declare function getQuoteById(
  id: string,
  params?: QueryParams
): Promise<APIResponse | null>;

export interface QueryParams {
  page?: number;
  limit?: number;
  offset?: number;
  sort?: string;
  filters?: Filters;
}

export interface Filters {
  match?: Record<string, string>;
  negateMatch?: Record<string, string>;
  include?: Record<string, string[]>;
  exclude?: Record<string, string[]>;
  exists?: string[];
  doesNotExist?: string[];
  regex?: Record<string, string>;
  lessThan?: Record<string, number>;
  greaterThanOrEqual?: Record<string, number>;
}

export interface APIResponse {
  docs: (Movie | Quote)[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
}
