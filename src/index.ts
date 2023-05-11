const { loadEnv } = require("../dotenv.browser.js");
loadEnv();

export { getMovies, getMovieById, getMovieQuotes } from "./api/movie";
export { getQuotes, getQuoteById } from "./api/quote";
