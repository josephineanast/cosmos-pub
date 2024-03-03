import Home from "@mui/icons-material/Home";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";

const navItems = [
  {
    icon: <Home />,
    label: "Dashboard",
    pathname: "/app",
  },
  {
    icon: <StickyNote2Icon />,
    label: "Proposals",
    pathname: "/app/proposal",
  },
  {
    icon: <SwitchAccountIcon />,
    label: "Validators",
    pathname: "/app/validator",
  },
];

export default navItems;
