import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    marginBottom: "15px",
  },
  button: {
    height: "55px",
    width: "55px",
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: "0 !important",
      border: "1px solid #5F7A61 !important",
    },
  },
});
