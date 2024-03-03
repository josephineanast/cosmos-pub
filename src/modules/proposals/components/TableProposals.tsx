import { Table, TablePagination, TableFilter } from "@/components/Elements";
import { Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { useProposalsGet } from "..";
import { formatDate } from "@/utils";
import { useTable } from "@/hooks";

type ProposalStatus =
  | "All"
  | "Deposit Period"
  | "Voting Period"
  | "Passed"
  | "Rejected"
  | "Failed";
type FilterKeys = "0" | "1" | "2" | "3" | "4" | "5";

const FILTERS: { label: ProposalStatus; value: FilterKeys }[] = [
  { label: "All", value: "0" },
  { label: "Deposit Period", value: "1" },
  { label: "Voting Period", value: "2" },
  { label: "Passed", value: "3" },
  { label: "Rejected", value: "4" },
  { label: "Failed", value: "5" },
];

export const TableProposals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<FilterKeys>("0");
  const [query, actions] = useTable();
  const { data, isLoading } = useProposalsGet({
    proposal_status: filter,
  });

  const blocksPerPage = query.limit ?? 10;
  const totalBlocks = data?.length ?? 0;
  const totalPages = Math.ceil(totalBlocks / blocksPerPage);
  const startIndex = (currentPage - 1) * blocksPerPage;
  const endIndex = Math.min(startIndex + blocksPerPage, totalBlocks);
  const displayedBlocks = data?.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return isLoading || !data ? (
    <Skeleton variant="rectangular" height={500} animation="wave" />
  ) : (
    <>
      <TableFilter
        label="Status"
        options={FILTERS}
        value={filter}
        onChange={(value) => setFilter(value as FilterKeys)}
      />
      <Table
        getKey={(row) => {
          row.proposal_id;
        }}
        data={displayedBlocks}
        config={[
          {
            label: "ID",
            render: (proposal) => (
              <Typography variant="b3">{proposal.proposal_id}</Typography>
            ),
          },
          {
            label: "Title",
            render: (proposal) => (
              <Typography variant="b3">{proposal.content?.title}</Typography>
            ),
          },
          {
            label: "Type",
            render: (proposal) => (
              <Typography variant="b3">
                {proposal?.content?.["@type"]}
              </Typography>
            ),
          },
          {
            label: "Status",
            render: (proposal) => (
              <Typography variant="b3">{proposal?.status}</Typography>
            ),
          },
          {
            label: "Voting End Times",
            render: (proposal) => (
              <Typography variant="b3">
                {formatDate(proposal?.voting_end_time)}
              </Typography>
            ),
          },
        ]}
      />
      <TablePagination
        count={query.limit * totalPages}
        page={currentPage}
        rowsPerPage={query.limit}
        onPageChange={handlePageChange}
        onRowsPerPageChange={actions.setLimit}
      />
    </>
  );
};
