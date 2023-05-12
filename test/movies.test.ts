import { getMovies, getMovieById, getMovieQuotes } from "../src/api/movie";
import { APIResponse, Movie, Quote } from "../index";

describe("getMovies Integration Tests", () => {
  let movies: APIResponse | null;

  beforeAll(async () => {
    movies = await getMovies();
  });

  it("should fetch movies successfully", async () => {
    expect(movies).not.toBeNull();
    if (movies) {
      expect(Array.isArray(movies.docs)).toBe(true);
    }
  });

  it("should fetch movies with pagination", async () => {
    expect(movies).not.toBeNull();
    if (movies) {
      const params = {
        page: 1,
        limit: 10,
      };
      const paginatedMovies = await getMovies(params);
      expect(paginatedMovies).not.toBeNull();
      if (paginatedMovies) {
        expect(Array.isArray(paginatedMovies.docs)).toBe(true);
        expect(paginatedMovies.docs.length).toBeGreaterThan(0);
        expect(paginatedMovies.page).toBe(params.page);
        expect(paginatedMovies.limit).toBe(params.limit);
      }
    }
  });

  it("should fetch movies with filters", async () => {
    expect(movies).not.toBeNull();
    if (movies) {
      const params = {
        filters: {
          match: { name: "The Hobbit Series" },
        },
      };
      const filteredMovies = await getMovies(params);
      expect(filteredMovies).not.toBeNull();
      if (filteredMovies) {
        expect(Array.isArray(filteredMovies.docs)).toBe(true);
        expect(filteredMovies.docs.length).toBeGreaterThan(0);
        filteredMovies.docs.forEach((movie: Movie | Quote) => {
          expect((movie as Movie).name).toContain("The Hobbit Series");
        });
      }
    }
  });
});

describe("getMovieById", () => {
  it("should return the correct movie object for a valid movie ID", async () => {
    const movieId = "5cd95395de30eff6ebccde5c";
    const movie = await getMovieById(movieId);
    if (movie) {
      expect(movie).not.toBeNull();
      expect(movie?.docs[0]._id).toBe(movieId);
    }
  });

  it("should return null for an invalid movie ID", async () => {
    const invalidMovieId = "000000";
    const movie = await getMovieById(invalidMovieId);
    expect(movie).toBeNull();
  });
});

describe("getMovieQuotes", () => {
  it("should return an array of quotes for a specific movie", async () => {
    const movieId = "5cd95395de30eff6ebccde5c";
    const quotes = await getMovieQuotes(movieId);
    expect(Array.isArray(quotes.docs)).toBe(true);
    expect(quotes.docs.length).toBeGreaterThan(0);
  });

  it("should throw an error if the movie ID does not exist", async () => {
    const invalidMovieId = "000000";
    await expect(getMovieQuotes(invalidMovieId)).rejects.toThrowError();
  });

  it("should return an empty array if the movie has no quotes", async () => {
    const movieId = "5cd95395de30eff6ebccde59";
    const quotes = await getMovieQuotes(movieId);
    expect(Array.isArray(quotes.docs)).toBe(true);
    expect(quotes.docs.length).toBe(0);
  });
});
