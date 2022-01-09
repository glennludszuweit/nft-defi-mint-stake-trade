import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
  },
  wrapper: {
    flexGrow: 1,
  },
  container: {
    maxWidth: "100%",
    margin: "0 auto 2rem !important",
  },
  main: {
    padding: "0 1rem",
    boxShadow: "none !important",
  },
});
