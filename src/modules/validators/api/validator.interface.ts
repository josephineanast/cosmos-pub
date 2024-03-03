interface CommissionRates {
  rate: string;
  max_rate: string;
  max_change_rate: string;
}

interface PubKey {
  "@type": string;
  key: string;
}

interface Delegations {
  total_count: number;
  total_tokens: string;
  total_tokens_display: number;
  total_usd: number;
}

interface Description {
  details: string;
  identity: string;
  moniker: string;
  security_contact: string;
  website: string;
  hex_address: string;
  image: string;
  keybase_image: string;
  liquid_shares: string;
  min_self_delegation: string;
  mintscan_image: string;
  missed_blocks: number;
  operator_address: string;
}

interface MissedBlockPeriod {
  blocks: number;
  missed: number;
}

interface StakingRewards {
  name: string;
  verified: boolean;
  slug: string;
}

interface SigningInfo {
  address: string;
  index_offset: string;
  jailed_until: string;
  missed_blocks_counter: string;
  start_height: string;
  tombstoned: boolean;
}

interface Slash {
  validator_period: string;
  fraction: string;
}

interface UptimePeriod {
  blocks: number;
  uptime: number;
}

/* eslint-disable */

export interface ValidatorResponse {
  name: string;
  validators: {
    active: boolean;
    address: string;
    commission: CommissionRates;
    update_time: string;
    consensus_pubkey: PubKey;
    delegations: Delegations;
    delegator_shares: string;
    description: Description;
    jailed: boolean;
    public_nodes: any;
    rank: number;
    services: StakingRewards;
    signing_info: SigningInfo;
    slashes: Slash[];
    status: string;
    tokens: string;
    unbonding_height: string;
    unbonding_ids: any[];
    unbonding_on_hold_ref_count: string;
    unbonding_time: string;
    uptime: number;
    uptime_periods: UptimePeriod[];
    validator_bond_shares: string;
    missed_blocks_periods: MissedBlockPeriod[];
  }[];
}
