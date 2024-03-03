import { Head } from "@/components/Elements";
import { Box, Typography, Divider } from "@mui/material";
import { TableValidators } from "@/modules/validators";

export const Validator = () => {
  return (
    <>
      <Head title="Validators" />
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
          Validators
        </Typography>
        <Divider sx={{ marginTop: 3, marginBottom: 3 }} />
        <TableValidators />
      </Box>
    </>
  );
};
