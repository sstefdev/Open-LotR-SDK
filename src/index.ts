import dotenv from "dotenv";
dotenv.config();

export { getMovies, getMovieById, getMovieQuotes } from "./api/movie";
export { getQuotes, getQuoteById } from "./api/quote";
