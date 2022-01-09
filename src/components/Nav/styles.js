import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    "& a": {
      textDecoration: "none",
    },
  },
  container: {
    width: "100%",
    display: "flex ",
    flexDirection: "row !important",
    justifyContent: "space-between ",
    alignItems: "center",
  },
}));
