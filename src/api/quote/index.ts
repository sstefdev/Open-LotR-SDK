import { makeRequest } from "@/utils";
import type { QueryParams, APIResponse } from "#/index";

export async function getQuotes(params?: QueryParams) {
  try {
    const response = await makeRequest("quote", {
      params,
    });
    return response.data as APIResponse;
  } catch (error) {
    console.error("Failed to fetch quotes:", error);
    return [];
  }
}

export async function getQuoteById(id: string, params?: QueryParams) {
  try {
    const response = await makeRequest(`quote/${id}`, {
      params,
    });
    return response.data as APIResponse;
  } catch (error) {
    console.error("Failed to fetch quote by ID:", error);
    return null;
  }
}
