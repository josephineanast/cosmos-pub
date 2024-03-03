import { axios } from "@/libs/axios";

import { ResponseBlocksLatest } from "./overview.types";

const getBlocksLatest = () => {
  return axios.get<ResponseBlocksLatest>(`/blocks/latest`);
};

export const overviewAPI = {
  getBlocksLatest,
};
