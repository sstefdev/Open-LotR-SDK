import { makeRequest } from "../../utils";
import type { QueryParams, APIResponse } from "#/index";

export async function getMovies(
  params?: QueryParams
): Promise<APIResponse | null> {
  try {
    const response = await makeRequest("movie", {
      params,
    });

    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      console.error("Failed to fetch movies: Invalid response");
      return null;
    }
  } catch (error: any) {
    console.error("Failed to fetch movies:", error.message);
    return null;
  }
}

export async function getMovieById(id: string): Promise<APIResponse | null> {
  try {
    const response = await makeRequest(`movie/${id}`);

    if (response.status === 200 && response.data) {
      return response.data as APIResponse;
    } else {
      console.error("Failed to fetch movie by ID: Invalid response");
      return null;
    }
  } catch (error: any) {
    console.error("Failed to fetch movie by ID:", error.message);
    return null;
  }
}

export async function getMovieQuotes(
  id: string,
  params?: QueryParams
): Promise<APIResponse> {
  try {
    const response = await makeRequest(`movie/${id}/quote`, {
      params,
    });

    if (response.status === 200 && response.data) {
      return response.data as APIResponse;
    } else {
      console.error("Failed to fetch movie quotes: Invalid response");
      throw new Error("Invalid response");
    }
  } catch (error: any) {
    console.error("Failed to fetch movie quotes:", error.message);
    throw error;
  }
}
