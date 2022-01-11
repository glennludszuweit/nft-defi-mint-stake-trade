import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "75em",
    margin: "2em auto",
  },
  textField: {
    "&:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 100px #000 inset",
      "-webkit-text-fill-color": "#fff",
    },
    "& .MuiAutocomplete-input": {
      width: "100% !important",
      display: "flex",
      justifyContent: "space-between",
    },
    [`& fieldset`]: {
      borderRadius: "0 !important",
      color: "#5F7A61 !important",
      border: "1px solid #5F7A61 !important",
    },
  },
});
