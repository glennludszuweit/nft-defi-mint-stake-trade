import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  menuIcon: {
    color: "inherit !important",
    [theme.breakpoints.up("md")]: {
      display: "none !important",
    },
  },
  menuItems: {
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
  menuItem: {
    margin: "0 .5em",
    "& button": {
      borderRadius: "0 !important",
    },
  },
}));
