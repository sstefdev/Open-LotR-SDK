import { getQuotes, getQuoteById } from "../src/api/quote";

describe("getQuotes", () => {
  it("should return an array of quotes", async () => {
    const response = await getQuotes();
    expect(response).toBeTruthy();
    expect(Array.isArray(response?.docs)).toBe(true);
  });

  it("should return quotes with required properties", async () => {
    const response = await getQuotes();
    expect(response).toBeTruthy();
    response?.docs.forEach((quote) => {
      expect(quote).toHaveProperty("_id");
      expect(quote).toHaveProperty("dialog");
      expect(quote).toHaveProperty("movie");
      expect(quote).toHaveProperty("character");
    });
  });

  it("should return paginated results with default values", async () => {
    const response = await getQuotes();
    expect(response).toBeTruthy();
    expect(response).toHaveProperty("docs");
    expect(Array.isArray(response?.docs)).toBe(true);
    expect(response).toHaveProperty("total");
    expect(typeof response?.total).toBe("number");
    expect(response).toHaveProperty("limit");
    expect(typeof response?.limit).toBe("number");
    expect(response).toHaveProperty("offset");
    expect(typeof response?.offset).toBe("number");
    expect(response).toHaveProperty("page");
    expect(typeof response?.page).toBe("number");
    expect(response).toHaveProperty("pages");
    expect(typeof response?.pages).toBe("number");
  });

  it("should return paginated results with custom values", async () => {
    const page = 2;
    const limit = 20;
    const response = await getQuotes({ page, limit });
    expect(response).toBeTruthy();
    expect(response?.page).toBe(page);
    expect(response?.limit).toBe(limit);
  });
});

describe("getQuoteById", () => {
  it("should return the quote object for a valid quote ID", async () => {
    const quoteId = "5cd96e05de30eff6ebcce7e9";
    const quote = await getQuoteById(quoteId);
    expect(quote).not.toBeNull();
    expect(quote?.docs[0]._id).toBe(quoteId);
  });

  it("should return null for a non-existent quote ID", async () => {
    const nonExistentId = "00000";
    const quote = await getQuoteById(nonExistentId);
    expect(quote).toBeNull();
  });

  it("should return the quote object for a valid quote ID (Integration Test)", async () => {
    const quoteId = "5cd96e05de30eff6ebcce7e9";
    const quote = await getQuoteById(quoteId);
    expect(quote).not.toBeNull();
    expect(quote?.docs[0]._id).toBe(quoteId);
    expect(quote?.docs[0]).toHaveProperty("dialog");
    expect(quote?.docs[0]).toHaveProperty("movie");
    expect(quote?.docs[0]).toHaveProperty("character");
  });

  it("should return null for a non-existent quote ID (Integration Test)", async () => {
    const nonExistentId = "00000";
    const quote = await getQuoteById(nonExistentId);
    expect(quote).toBeNull();
  });
});
