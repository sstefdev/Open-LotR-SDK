import { makeRequest } from "@/utils";
import type { QueryParams, APIResponse } from "#/index";

export async function getMovies(params?: QueryParams) {
  try {
    const response = await makeRequest("movie", {
      params,
    });
    return response.data as APIResponse;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return null;
  }
}

export async function getMovieById(id: string, params?: QueryParams) {
  try {
    const response = await makeRequest(`movie/${id}`, {
      params,
    });
    return response.data as APIResponse;
  } catch (error) {
    console.error("Failed to fetch movie by ID:", error);
    return null;
  }
}

export async function getMovieQuotes(id: string, params?: QueryParams) {
  try {
    const response = await makeRequest(`movie/${id}/quote`, {
      params,
    });
    return response.data as APIResponse;
  } catch (error) {
    console.error("Failed to fetch movie quotes:", error);
    return [];
  }
}
