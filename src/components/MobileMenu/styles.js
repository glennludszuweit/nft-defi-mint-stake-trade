import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 0,
    zIndex: 5,
    width: 250,
    padding: "1em 2em",
    position: "fixed",
    left: -5,
    top: "64px",
    transition: "all 1s ease",
    "& a": {
      textDecoration: "none !important",
    },
  },
  menuItems: {
    // [theme.breakpoints.down("md")]: {
    //   display: "none !important",
    // },
  },
  menuItem: {
    margin: ".5em 0",
    "& button": {
      borderRadius: "0 !important",
      width: "100%",
    },
  },
}));
