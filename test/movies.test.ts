import { getMovies, getMovieById, getMovieQuotes } from "../src/api/movie";
import { APIResponse } from "../index";

describe("getMovies", () => {
  let response: APIResponse;

  beforeAll(async () => {
    response = await getMovies();
  });

  it("should return an array of movies", async () => {
    expect(Array.isArray(response.docs)).toBe(true);
  });

  it("should return movies with required properties", async () => {
    response.docs.forEach((movie) => {
      expect(movie).toHaveProperty("_id");
      expect(movie).toHaveProperty("name");
      expect(movie).toHaveProperty("runtimeInMinutes");
      expect(movie).toHaveProperty("budgetInMillions");
      expect(movie).toHaveProperty("boxOfficeRevenueInMillions");
      expect(movie).toHaveProperty("academyAwardNominations");
      expect(movie).toHaveProperty("academyAwardWins");
      expect(movie).toHaveProperty("rottenTomatoesScore");
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
    const customResponse = await getMovies({
      page: 2,
      limit: 10,
    });
    expect(customResponse.page).toBe(2);
    expect(customResponse.limit).toBe(10);
  });

  it("should return filtered results based on provided filters", async () => {
    const customResponse = await getMovies({
      filters: {
        match: { name: "The Hobbit Series" },
      },
    });
    const movies = customResponse.docs;
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
    movies.forEach((movie) => {
      expect(movie.name).toContain("The Hobbit Series");
    });
  });
});

describe("getMovieById", () => {
  it("should return the correct movie object for a valid movie ID", async () => {
    const movieId = "5cd95395de30eff6ebccde5c";
    const movie = await getMovieById(movieId);
    expect(movie).not.toBeNull();
    expect(movie?.docs[0]._id).toBe(movieId);
  });

  it("should return an error with status code 500 for a non-existent movie ID", async () => {
    const nonExistentId = "00000";
    try {
      await getMovieById(nonExistentId);
    } catch (error) {
      expect(error).toHaveProperty("response");
      expect(error.response).toHaveProperty("status");
      expect(error.response.status).toBe(500);
    }
  });
});

describe("getMovieQuotes", () => {
  it("should return an array of quotes for a specific movie", async () => {
    const movieId = "5cd95395de30eff6ebccde56";
    const { docs } = await getMovieQuotes(movieId);
    expect(Array.isArray(docs)).toBe(true);
  });

  it("should return an empty array if the movie ID does not exist", async () => {
    const invalidMovieId = "000000";
    const quotes = await getMovieQuotes(invalidMovieId);
    expect(Array.isArray(quotes)).toBe(true);
    expect(quotes).toHaveLength(0);
  });

  it("should return an empty array if the movie has no quotes", async () => {
    const movieId = "5cd95395de30eff6ebccde56";
    const { docs } = await getMovieQuotes(movieId);
    expect(Array.isArray(docs)).toBe(true);
    expect(docs).toHaveLength(0);
  });
});
