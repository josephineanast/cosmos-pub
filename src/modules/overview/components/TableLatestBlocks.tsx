import { Table, TablePagination } from "@/components/Elements";
import { Skeleton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { axios } from "@/libs/axios";
import { interval } from "rxjs";
import { switchMap } from "rxjs/operators";
import { ResponseBlocksLatest } from "..";
import { formatDate } from "@/utils";
import { useTable } from "@/hooks";

export const TableLatestBlocks = () => {
  const [latestBlocks, setLatestBlocks] = useState<ResponseBlocksLatest[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, actions] = useTable();

  useEffect(() => {
    const subscription = interval(10000)
      .pipe(switchMap(() => axios.get<ResponseBlocksLatest>("/blocks/latest")))
      .subscribe({
        next: (response) => {
          const blocks = [response.data];

          setLatestBlocks((prevBlocks) => {
            const updatedBlocks = [...blocks, ...prevBlocks];
            return updatedBlocks.slice(Math.max(updatedBlocks.length - 30, 0));
          });
          setIsLoading(false);
        },
        error: (error) => {
          console.error("Error fetching latest block:", error);
          setIsLoading(false);
        },
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const blocksPerPage = query.limit;
  const totalBlocks = latestBlocks.length;
  const totalPages = Math.ceil(totalBlocks / blocksPerPage);

  const startIndex = (currentPage - 1) * blocksPerPage;
  const endIndex = Math.min(startIndex + blocksPerPage, totalBlocks);
  const displayedBlocks = latestBlocks.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return isLoading || !latestBlocks ? (
    <Skeleton variant="rectangular" height={400} />
  ) : (
    <>
      <Table
        getKey={(row) => row.block_id.hash}
        data={displayedBlocks}
        config={[
          {
            label: "Height",
            render: (block) => (
              <Typography variant="b3">{block.block.header.height}</Typography>
            ),
          },
          {
            label: "Time",
            render: (block) => (
              <Typography variant="b3">
                {formatDate(block.block.header.time)}
              </Typography>
            ),
          },
          {
            label: "Hash",
            render: (block) => (
              <Typography variant="b3">
                {block.block.header.last_block_id.hash}
              </Typography>
            ),
          },
          {
            label: "No of Txs",
            render: (block) => (
              <Typography variant="b3">
                {block.block.data.txs.length}
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
