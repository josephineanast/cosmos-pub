import { useQuery } from "@tanstack/react-query";

import { validatorsAPI, validatorsKeys } from "../api";

export const useValidatorsDirectoryGet = () =>
  useQuery({
    queryKey: validatorsKeys.dir,
    queryFn: validatorsAPI.getValidatorsDirectoryAll,
    select: (response) => {
      return response.data.validators;
    },
  });
