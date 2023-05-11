import { makeRequest } from "@/src/utils";
import type { QueryParams, Movie } from "@/index";

export async function getMovies(params?: QueryParams) {
  const response = await makeRequest("movie", {
    params,
  });

  return response.data as Movie[];
}

export function getMovieById(id: string) {
  // Implement the logic to fetch a movie by its ID
}

export function getMovieQuotes(id: string) {
  // Implement the logic to fetch quotes for a specific movie
}
