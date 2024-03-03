import { Table, TablePagination } from "@/components/Elements";
import { Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import { useValidatorsDirectoryGet } from "../hooks/useValidatorDirectoryGet";
import { useTable } from "@/hooks";

export const TableValidators = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, actions] = useTable();
  const { data, isLoading } = useValidatorsDirectoryGet();

  const blocksPerPage = query.limit ?? 10;
  const totalBlocks = data?.length ?? 0;
  const totalPages = Math.ceil(totalBlocks / blocksPerPage);
  const startIndex = (currentPage - 1) * blocksPerPage;
  const endIndex = Math.min(startIndex + blocksPerPage, totalBlocks);
  const displayedBlocks = data?.slice(startIndex, endIndex) ?? [];

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return isLoading || !data ? (
    <Skeleton animation="wave" variant="rectangular" height={500} />
  ) : (
    <>
      <Table
        getKey={(index) => index}
        data={displayedBlocks}
        config={[
          {
            label: "Name",
            render: (data) => (
              <Typography variant="b3">{data?.description?.moniker}</Typography>
            ),
          },
          {
            label: "Status",
            render: (data) => (
              <Typography variant="b3">{data?.status}</Typography>
            ),
          },
          {
            label: "Delegator Shares",
            render: (data) => (
              <Typography variant="b3">
                {parseFloat(data?.delegator_shares).toFixed(0)}
              </Typography>
            ),
          },
          {
            label: "Commission Rates",
            render: (data) => (
              <Typography variant="b3">{data?.commission?.rate}</Typography>
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
