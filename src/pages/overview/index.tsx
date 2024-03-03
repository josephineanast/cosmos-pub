import { Head } from "@/components/Elements";
import { Box, Typography, Divider } from "@mui/material";
import { LatestBlocks, TableLatestBlocks, CoinData } from "@/modules/overview";
import axios from "axios";
import { useState, useEffect } from "react";

export const Overview = () => {
  const [blockTime, setBlockTime] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://chains.cosmos.directory/cosmoshub"
        );
        const data = response.data.chain;
        setBlockTime(data?.params?.actual_block_time);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <Head title="Dashboard" />
      <Box
        sx={(theme) => ({
          padding: theme.spacing(4),
        })}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{ fontWeight: 700, marginTop: 2 }}
        >
          Dashboard
        </Typography>
        <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
        <CoinData />
        <LatestBlocks blockTime={blockTime} />
        <TableLatestBlocks />
      </Box>
    </>
  );
};
