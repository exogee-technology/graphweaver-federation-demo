import got from "got-cjs";

const baseUrl = "https://swapi.info/api";

export const fetch = async <T>(path: string) => {
  return got.get(`${baseUrl}${path}`).json<T[]>();
};
