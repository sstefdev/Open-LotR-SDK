/**
 * Retrieves a list of movies.
 *
 * @param params - Optional query parameters for pagination, sorting, and filtering.
 * @returns A promise that resolves to an array of movies.
 */
export declare function getMovies(params?: QueryParams): Promise<Movie[]>;

/**
 * Retrieves a movie by its ID.
 *
 * @param id - The ID of the movie.
 * @returns A promise that resolves to the movie object, or null if the movie is not found.
 */
export declare function getMovieById(id: string): Promise<Movie | null>;

/**
 * Retrieves quotes for a specific movie.
 *
 * @param id - The ID of the movie.
 * @param params - Optional query parameters for pagination, sorting, and filtering.
 * @returns A promise that resolves to the API response object containing the quotes.
 */
export declare function getMovieQuotes(
  id: string,
  params?: QueryParams
): Promise<APIResponse>;

/**
 * Retrieves a list of quotes.
 *
 * @param params - Optional query parameters for pagination, sorting, and filtering.
 * @returns A promise that resolves to the API response object containing the quotes.
 */
export declare function getQuotes(params?: QueryParams): Promise<APIResponse>;

/**
 * Retrieves a quote by its ID.
 *
 * @param id - The ID of the quote.
 * @returns A promise that resolves to the quote object, or null if the quote is not found.
 */
export declare function getQuoteById(id: string): Promise<APIResponse | null>;

/**
 * Query parameters for pagination, sorting, and filtering.
 */
export interface QueryParams {
  page?: number;
  limit?: number;
  offset?: number;
  sort?: string;
  filters?: Filters;
}

/**
 * Filtering criteria for the API.
 */
export interface Filters {
  match?: Record<string | number, string | number>;
  negateMatch?: Record<string | number, string | number>;
  include?: Record<string, string[]>;
  exclude?: Record<string, string[]>;
  exists?: string[];
  doesNotExist?: string[];
  regex?: Record<string, string>;
  lessThan?: Record<string, number>;
  greaterThanOrEqual?: Record<string, number>;
}

/**
 * API response object.
 */
export interface APIResponse {
  docs: (Movie | Quote)[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

/**
 * Movie object.
 */
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

/**
 * Quote object.
 */
export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
}
