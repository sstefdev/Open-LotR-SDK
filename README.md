# Lord of the Rings SDK 🧙‍♂️

This SDK makes it easy for developers to consume information about the trilogy from an existing Lord of the Rings API.

## Table of Content:

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [SDK Design](#sdk-design)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

The Lord of the Rings SDK can be installed using your favorite package manager. Run the following command:

`npm install lord-of-the-rings-sdk`

## Getting Started

To get started with the Lord of the Rings SDK, follow these steps:

1. Import the SDK in your project:

```javascript
import {
  getMovies,
  getMovieById,
  getMovieQuotes,
  getQuotes,
  getQuoteById,
} from "lord-of-the-rings-sdk";
```

2. Use the SDK functions to interact with the Lord of the Rings API:

   Fetch a list of movies

   `const movies = await getMovies();`

   Fetch a specific movie by ID

   `const movie = await getMovieById('movie-id');`

   Fetch quotes for a specific movie

   `const quotes = await getMovieQuotes('movie-id');`

   Fetch a list of all quotes

   `const allQuotes = await getQuotes();`

   Fetch a specific quote by ID

   `const quote = await getQuoteById('quote-id');`

3. Handle the responses and errors according to your application's requirements.

## Environment Variables

The Lord of the Rings SDK can utilize the following environment variables:

- LOTR_API_BASE_URL: The base URL of the Lord of the Rings API. Default: https://the-one-api.dev/v2/
- LOTR_API_KEY: Your API key for accessing the Lord of the Rings API. Default: YXrt5Rys2Wu_iO-B3-yX

You can set these environment variables in your development environment or use a library like dotenv to load them from a .env file.

## SDK Design

For detailed information about the design and implementation of the Lord of the Rings SDK, please refer to the design.md file in the root directory of this project.

## Testing

The Lord of the Rings SDK provides a comprehensive set of tests to ensure its functionality. To run the tests, use the following command:

`npm run test`

## Contributing

Contributions are welcome! If you find any issues or want to add new features to the SDK, feel free to open a pull request.

## License

This project is licensed under the MIT License.

### [Author](https://github.com/sstefdev)
