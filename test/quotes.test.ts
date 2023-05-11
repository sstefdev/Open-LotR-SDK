import { APIResponse } from "../index";
import { getQuotes, getQuoteById } from "../src/api/quote";

describe("getQuotes", () => {
  let response: APIResponse;

  beforeAll(async () => {
    response = await getQuotes();
  });

  it("should return an array of quotes", async () => {
    expect(Array.isArray(response.docs)).toBe(true);
  });

  it("should return quotes with required properties", async () => {
    response.docs.forEach((quote) => {
      expect(quote).toHaveProperty("_id");
      expect(quote).toHaveProperty("dialog");
      expect(quote).toHaveProperty("movie");
      expect(quote).toHaveProperty("character");
    });
  });

  it("should return paginated results with default values", async () => {
    expect(response).toHaveProperty("docs");
    expect(Array.isArray(response.docs)).toBe(true);
    expect(response).toHaveProperty("total");
    expect(typeof response.total).toBe("number");
    expect(response).toHaveProperty("limit");
    expect(typeof response.limit).toBe("number");
    expect(response).toHaveProperty("offset");
    expect(typeof response.offset).toBe("number");
    expect(response).toHaveProperty("page");
    expect(typeof response.page).toBe("number");
    expect(response).toHaveProperty("pages");
    expect(typeof response.pages).toBe("number");
  });

  it("should return paginated results with custom values", async () => {
    const customResponse = await getQuotes({
      page: 2,
      limit: 10,
    });
    expect(customResponse.page).toBe(2);
    expect(customResponse.limit).toBe(10);
  });

  it("should return filtered results based on provided filters", async () => {
    const customResponse = await getQuotes({
      filters: {
        match: { dialog: "Give us that! Deagol my love" },
      },
    });
    const movies = customResponse.docs;
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
    movies.forEach((movie) => {
      expect(movie.dialog).toContain("Give us that! Deagol my love");
    });
  });
});

describe("getQuoteById", () => {
  it("should return a quote object for a valid ID", async () => {
    const quoteId = "5cd96e05de30eff6ebcce7e9";
    const { docs } = await getQuoteById(quoteId);
    expect(typeof docs[0]).toBe("object");
    expect(docs[0]).toHaveProperty("_id", quoteId);
  });

  it("should return null for an invalid ID", async () => {
    const nonExistentId = "00000";
    try {
      await getQuoteById(nonExistentId);
    } catch (error) {
      expect(error).toHaveProperty("response");
      expect(error.response).toHaveProperty("status");
      expect(error.response.status).toBe(500);
    }
  });
});
