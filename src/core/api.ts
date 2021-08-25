/**
 * Things to improve in code below
 *
 * 1. Add queryString.parse() to generate string of query parameters from object
 *
 * 2. Maybe even one functio that accepts endpoint, and query params.
 * Something like this makeRequest('/endpoint', { query?: unknown, body?: unknown, config?: unkown })
 *
 * 3. Instead of add return type Promise<typeof getVideosListJSON | null> it's better to generate these
 * types from API Schema like in Swagger. I wrote an article about how to do this.
 * Check this link: https://blog.pavelkeyzik.com/posts/generate-types-from-swagger
 */

import getVideosListJSON from "./mocks/get-videos-list.json";
import getVideoByIdJSON from "./mocks/get-video-by-id.json";
import { config } from "./config";

/**
 * Just a little helper to add delay for mocked data
 */
async function getMockedDataAsPromise<T>(mockedData: T) {
  return new Promise<typeof mockedData>((res) => {
    setTimeout(() => {
      res(mockedData);
    }, 700);
  });
}

async function getVideosList(params: {
  search: string | null;
  pageToken?: string;
}): Promise<typeof getVideosListJSON | null> {
  if (params.search === null) {
    return null;
  }

  if (config.isDevelopment) {
    return await getMockedDataAsPromise(getVideosListJSON);
  }

  const promise = await fetch(
    `${config.api.youtube.baseURL}/search?key=${config.api.youtube.key}&q=${
      params.search
    }&part=snippet&type=video${
      params.pageToken ? `&pageToken=${params.pageToken}` : ""
    }`
  );

  return await promise.json();
}

async function getVideoById(params: {
  id?: string;
}): Promise<typeof getVideoByIdJSON | null> {
  if (!params.id) {
    return null;
  }

  if (config.isDevelopment) {
    return await getMockedDataAsPromise(getVideoByIdJSON);
  }

  const promise = await fetch(
    `${config.api.youtube.baseURL}/videos?key=${config.api.youtube.key}&id=${params.id}&part=snippet`
  );

  return await promise.json();
}

const api = { getVideosList, getVideoById };

export { api };
