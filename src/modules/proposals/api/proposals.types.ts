import { PaginatedParams } from "@/types/api";

export type optionsGetProposals = PaginatedParams<{
  proposal_status?: string;
  voter?: string;
  depositor?: string;
}>;

type ProposalItem = {
  proposal_id: string;
  content: {
    title: string;
    "@type": string;
    value: string;
  };
  status: string;
  final_tally_result: {
    yes: string;
    abstain: string;
    no: string;
    no_with_veto: string;
  };
  submit_time: string;
  deposit_end_time: string;
  total_deposit: {
    denom: string;
    amount: string;
  }[];
  voting_start_time: string;
  voting_end_time: string;
};

export type ResponseGetProposals = {
  data: {
    proposals: ProposalItem[];
  };
  pagination: {
    next_key: string;
    total: number;
  };
};
