import { useQuery } from "@tanstack/react-query";

import { optionsGetProposals, proposalAPI, proposalKeys } from "../api";

export const useProposalsGet = (options: optionsGetProposals) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: proposalKeys.list(options),
    queryFn: () => proposalAPI.getProposals(options),
  });
  if (isLoading || isError) {
    return {
      data: [],
      total: 0,
      next_key: 1,
      isLoading,
      isError,
    };
  }
  return {
    data: data?.data?.proposals ?? [],
    total: data?.pagination?.total,
    next_key: data?.pagination?.next_key,

    isLoading,
    isError,
  };
};
