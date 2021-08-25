import { useInfiniteQuery } from "react-query";

import { api } from "../../api";
import { cacheKeys } from "../../cache";

function useVideoList(params: { search: string | null }) {
  const state = useInfiniteQuery(
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

  return {
    ...state,
    isNothingToShow:
      !state.data ||
      !state.data.pages ||
      state.data.pages.length === 0 ||
      state.data.pages[0]?.items.length === 0,
  };
}

export { useVideoList };
