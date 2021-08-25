import { useQuery } from "react-query";

import { api } from "../../api";
import { cacheKeys } from "../../cache";

function useVideoList() {
  return useQuery(cacheKeys.videoList, () => api.getVideosList());
}

export { useVideoList };
