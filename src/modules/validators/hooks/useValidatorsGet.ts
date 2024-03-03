import { useQuery } from "@tanstack/react-query";

import { validatorsAPI, validatorsKeys } from "../api";

export const useValidatorsGet = () =>
  useQuery({
    queryKey: validatorsKeys.all,
    queryFn: validatorsAPI.getValidatorsLatest,
    select: (response) => {
      return response.data.result;
    },
  });
