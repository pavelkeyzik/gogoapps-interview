import { useQuery } from "react-query";

import { api } from "../../api";
import { cacheKeys } from "../../cache";

function useVideoList(params: { search: string | null }) {
  return useQuery([cacheKeys.videoList, params.search], () =>
    api.getVideosList(params)
  );
}

export { useVideoList };
