import { useInfiniteQuery } from "react-query";

import { api } from "../../api";
import { cacheKeys } from "../../cache";

function useVideoList(params: { search: string | null }) {
  return useInfiniteQuery(
    [cacheKeys.videoList, params.search],
    ({ pageParam }) =>
      api.getVideosList({
        search: params.search,
        pageToken: pageParam,
      }),
    {
      getNextPageParam(data) {
        return data?.nextPageToken;
      },
    }
  );
}

export { useVideoList };
