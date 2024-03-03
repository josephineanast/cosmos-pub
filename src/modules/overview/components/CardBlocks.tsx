import { palette } from "@/theme/palette";
import { Grid, Paper, Typography } from "@mui/material";

interface Props {
  title: string;
  amount: string | number;
}

export const CardBlocks = ({ title, amount }: Props) => {
  return (
    <Paper
      sx={{
        borderRadius: 1.5,
        border: `1px solid ${palette.grey.A100}`,
        boxShadow: "0px 6px 12px 0px rgba(140, 152, 164, 0.10)",
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Typography
        variant="b1"
        sx={{
          fontWeight: 700,
          display: "flex",
          justifyContent: "center",
          marginBottom: 1,
        }}
      >
        {title}
      </Typography>
      <Grid container sx={{ justifyContent: "center" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, display: "flex", justifyContent: "center" }}
        >
          {amount}
        </Typography>
      </Grid>
    </Paper>
  );
};
