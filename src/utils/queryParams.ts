import type { QueryParams } from "@/index.d.ts";

export function addQueryParams(url: string, params?: QueryParams) {
  if (params) {
    const { page, limit, offset, sort, filters } = params;

    let queryParams = new URLSearchParams();

    if (page) {
      queryParams.append("page", page.toString());
    }

    if (limit) {
      queryParams.append("limit", limit.toString());
    }

    if (offset) {
      queryParams.append("offset", offset.toString());
    }

    if (sort) {
      const sortParams = sort.split(":");
      const sortBy = sortParams[0];
      const sortOrder = sortParams[1] || "asc";
      queryParams.append("sort", `${sortBy}:${sortOrder}`);
    }

    if (filters) {
      const {
        match,
        negateMatch,
        include,
        exclude,
        exists,
        doesNotExist,
        regex,
        lessThan,
        greaterThanOrEqual,
      } = filters;

      if (match) {
        for (const [key, value] of Object.entries(match)) {
          queryParams.append(key, value);
        }
      }

      if (negateMatch) {
        for (const [key, value] of Object.entries(negateMatch)) {
          queryParams.append(`${key}!`, value);
        }
      }

      if (include) {
        for (const [key, values] of Object.entries(include)) {
          const encodedValues = values.map((v) => encodeURIComponent(v));
          queryParams.append(key, encodedValues.join(","));
        }
      }

      if (exclude) {
        for (const [key, values] of Object.entries(exclude)) {
          const encodedValues = values.map((v) => encodeURIComponent(v));
          queryParams.append(`${key}!`, encodedValues.join(","));
        }
      }

      if (exists) {
        for (const field of exists) {
          queryParams.append(field, "");
        }
      }

      if (doesNotExist) {
        for (const field of doesNotExist) {
          queryParams.append(`${field}!`, "");
        }
      }

      if (regex) {
        for (const [key, value] of Object.entries(regex)) {
          queryParams.append(key, `/${value}/`);
        }
      }

      if (lessThan) {
        for (const [key, value] of Object.entries(lessThan)) {
          queryParams.append(`${key}<`, value.toString());
        }
      }

      if (greaterThanOrEqual) {
        for (const [key, value] of Object.entries(greaterThanOrEqual)) {
          queryParams.append(`${key}>`, value.toString());
        }
      }
    }

    const queryString = queryParams.toString();

    if (queryString) {
      url += `?${queryString}`;
    }

    return url;
  }
}
