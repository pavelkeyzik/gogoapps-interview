import { useQuery } from "react-query";

import { api } from "../../api";
import { cacheKeys } from "../../cache";

function useVideoById(params: { id?: string }) {
  const { data, isLoading, error } = useQuery(
    [cacheKeys.videoById, params.id],
    () => api.getVideoById({ id: params.id }),
    {
      enabled: params.id ? true : false,
    }
  );

  const formattedData = data?.items[0].snippet || null;

  return {
    data: formattedData,
    isLoading,
    error,
  };
}

export { useVideoById };
