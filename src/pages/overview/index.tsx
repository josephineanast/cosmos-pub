import { Head } from "@/components/Elements";
import { Box, Typography, Divider } from "@mui/material";
import { LatestBlocks, TableLatestBlocks, CoinData } from "@/modules/overview";

export const Overview = () => {
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
        <LatestBlocks />
        <TableLatestBlocks />
      </Box>
    </>
  );
};
