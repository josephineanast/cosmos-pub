export type PaginationParams = {
  key?: string;
  offset?: string;
  limit?: string;
  count_total?: string;
  reverse?: string;
};

export type PaginatedParams<ExtraParams> = PaginationParams & ExtraParams;

export type PaginationResponse = {
  next_key: string;
  total: string;
};

export type PaginatedResponse<
  Data,
  ExtraProps extends object = Record<string, never>
> = {
  data: Data[];
  pagination: PaginationResponse;
} & ExtraProps;
