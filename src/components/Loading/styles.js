import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  loading: {
    color: "rgba(0,0,0, .8)",
    height: "10px !important",
    width: "10px !important",
  },
}));
