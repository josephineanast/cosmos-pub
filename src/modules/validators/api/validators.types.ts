export type validators = {
  block_height: string;
  validators: {
    address: string;
    pub_key: {
      type: string;
      value: string;
    };
    proposer_priority: string;
    voting_power: string;
  }[];
  total: string;
};

export type ResponseValidatorsLatest = {
  result: validators;
};
