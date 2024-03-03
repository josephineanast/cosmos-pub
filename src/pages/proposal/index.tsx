import { Head } from "@/components/Elements";
import { Box, Typography, Divider } from "@mui/material";
import { TableProposals } from "@/modules/proposals";

export const Proposal = () => {
  return (
    <>
      <Head title="Proposals" />
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
          Proposals
        </Typography>
        <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
        <TableProposals />
      </Box>
    </>
  );
};
