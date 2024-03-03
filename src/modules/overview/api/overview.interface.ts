/* eslint-disable */

export interface CoinGeckoCoinResponse {
  additional_notices: any[];
  asset_platform_id: null;
  block_time_in_minutes: number;
  categories: string[];
  community_data: {
    facebook_likes: null;
    reddit_accounts_active_48h: number;
    reddit_average_comments_48h: number;
    reddit_average_posts_48h: number;
    reddit_subscribers: number;
    telegram_channel_user_count: number;
    twitter_followers: number;
  };
  country_origin: string;
  description: {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
  };
  detail_platforms: {
    [platform: string]: {
      decimal_place: number | null;
      contract_address: string;
    };
  };
  developer_data: {
    closed_issues: number;
    code_additions_deletions_4_weeks: {
      additions: number;
      deletions: number;
    };
    commit_count_4_weeks: number;
    forks: number;
    last_4_weeks_commit_activity_series: number[];
    pull_request_contributors: number;
    pull_requests_merged: number;
    stars: number;
    subscribers: number;
    total_issues: number;
  };
  genesis_date: null;
  hashing_algorithm: null;
  ico_data: {
    ico_start_date: string;
    ico_end_date: string;
    short_desc: string;
    description: string;
    links: Record<string, string>;
  };
  id: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  last_updated: string;
  links: {
    announcement_url: string[];
    bitcointalk_thread_identifier: null;
    blockchain_site: string[];
    chat_url: string[];
    facebook_username: string;
    homepage: string[];
    official_forum_url: string[];
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
    subreddit_url: string;
    telegram_channel_identifier: string;
    twitter_screen_name: string;
    whitepaper: string;
  };
  localization: Record<string, string>;
  market_cap_rank: number;
  market_data: {
    current_price: Record<string, number>;
    total_value_locked: null;
    mcap_to_tvl_ratio: null;
    fdv_to_tvl_ratio: null;
    roi: Record<string, number> | null;
    market_cap_change_24h: number;
    price_change_24h: number;
    total_supply: number;
  };
  name: string;
  platforms: Record<string, string>;
  preview_listing: boolean;
  public_notice: null;
  sentiment_votes_down_percentage: number;
  sentiment_votes_up_percentage: number;
  status_updates: any[];
  symbol: string;
  tickers: any[];
  watchlist_portfolio_users: number;
  web_slug: string;
}
