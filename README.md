# Lord of the Rings SDK 🧙‍♂️

This SDK makes it easy for developers to consume information about the trilogy from an existing Lord of the Rings API.

Follow this [link](https://the-one-api.dev/documentation) to learn more about the API that is used in the SDK and how to create your own API key.

## Table of Content:

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Filtering, sorting and pagination](#filtering-sorting-and-pagination)
- [Rate limit](#rate-limit)
- [Environment Variables](#environment-variables)
- [SDK Design](#sdk-design)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

The Lord of the Rings SDK can be installed using your favorite package manager. Run the following command:

`npm install stefan-stefanovic-sdk`

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
} from "stefan-stefanovic-sdk";
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

## Filtering, sorting and pagination

### Filtering

To filter the data based on specific criteria, you can include the filters parameter when calling the SDK functions. The filters parameter accepts an object with various filtering options. Here's an example:

```
const filters = {
  match: {
    name: "The Lord of the Rings",
    academyAwardWins: "4",
  },
  lessThan: {
    budgetInMillions: 100,
  },
};
const movies = await getMovies({ filters });
```

### Sorting

To sort the data in a specific order, you can include the sort parameter when calling the SDK functions. The sort parameter accepts a string that specifies the field to sort by and the sorting order. Here's an example:

```
const sort = "name:asc";
const movies = await getMovies({ sort });
```

### Pagination

To paginate through the data, you can include the page, limit, and offset parameters when calling the SDK functions. The page parameter specifies the page number, the limit parameter sets the number of items per page, and the offset parameter sets the number of items to skip. Here's an example:

```
const page = 2;
const limit = 10;
const offset = 1;
const movies = await getMovies({ page, limit, offset });
```

## Rate limit

The Lord of the Rings API imposes a rate limit of 100 requests per 10 minutes for the SDK. This means that you should avoid exceeding this limit to ensure smooth and uninterrupted access to the API.

If you make more than 100 requests within a 10-minute window, you may receive an error response indicating that you have exceeded the rate limit. To avoid this, it's recommended to manage your requests responsibly and consider implementing appropriate measures such as caching or throttling mechanisms.

Please note that the rate limit is subject to change, and it's important to check the official API documentation for any updates or modifications to the rate limit policy.

## Environment Variables

The Lord of the Rings SDK can utilize the following environment variables:

- `LOTR_API_BASE_URL`: The base URL of the Lord of the Rings API. Default: https://the-one-api.dev/v2/
- `LOTR_API_KEY`: Your API key for accessing the Lord of the Rings API. Default: YXrt5Rys2Wu_iO-B3-yX

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
