import { makeRequest } from "../../utils";
import type { QueryParams, APIResponse, Quote } from "#/index";

export async function getQuotes(
  params?: QueryParams
): Promise<APIResponse<Quote> | null> {
  try {
    const response = await makeRequest("quote", {
      params,
    });

    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      console.error("Failed to fetch quotes: Invalid response");
      return null;
    }
  } catch (error: any) {
    console.error("Failed to fetch quotes:", error.message);
    return null;
  }
}

export async function getQuoteById(
  id: string,
  params?: QueryParams
): Promise<APIResponse<Quote> | null> {
  try {
    const response = await makeRequest(`quote/${id}`, {
      params,
    });

    if (response.status === 200 && response.data) {
      return response.data.docs[0];
    } else {
      console.error("Failed to fetch quote by ID: Invalid response");
      return null;
    }
  } catch (error: any) {
    console.error("Failed to fetch quote by ID:", error.message);
    return null;
  }
}
