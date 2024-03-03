import { useQuery } from "@tanstack/react-query";

import { overviewKeys, overviewAPI } from "../api";

export const useBlocksLatestGet = () =>
  useQuery({
    queryKey: overviewKeys.all,
    queryFn: overviewAPI.getBlocksLatest,
    select: (response) => {
      return response.data;
    },
  });
