import { optionsGetProposals } from "./proposals.types";

export const proposalKeys = {
  all: [{ namespace: "proposals" }] as const,
  lists: () => [{ ...proposalKeys.all[0], entity: "list" }] as const,
  list: (options: optionsGetProposals) =>
    [{ ...proposalKeys.lists()[0], options }] as const,
};
