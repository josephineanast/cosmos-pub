import { axios } from "@/libs/axios";
import { optionsGetProposals, ResponseGetProposals } from "./proposals.types";

const getProposals = (
  options: optionsGetProposals
): Promise<ResponseGetProposals> => {
  return axios.get(`/cosmos/gov/v1beta1/proposals`, { params: options });
};

export const proposalAPI = {
  getProposals,
};
