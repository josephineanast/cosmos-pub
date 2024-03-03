// material
import {
  styled,
  Box,
  Stack,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
// components

// icons
import Search from "@mui/icons-material/Search";

export interface DashboardHeaderProps {
  activePath: string;
}

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  left: 0,
  padding: "14px 52px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  zIndex: 120,
  borderBottom: `solid 1px ${theme.palette.grey[100]}`,
}));

// ======================================================================================

const Searchbar = () => {
  return (
    <OutlinedInput
      placeholder="Search ..."
      startAdornment={
        <InputAdornment position="start">
          <Search sx={{ color: "grey.400", fontSize: 24 }} />
        </InputAdornment>
      }
      sx={{
        color: "grey.400",
        ".MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    />
  );
};

export const DashboardHeader = () => {
  return (
    <HeaderContainer>
      <Searchbar />
      <Stack direction="row" spacing={3}></Stack>
    </HeaderContainer>
  );
};
