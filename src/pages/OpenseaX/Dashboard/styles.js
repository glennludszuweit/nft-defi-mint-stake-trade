import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  thumbImg: {
    width: "3em",
    height: "3em",
    objectFit: "contain",
    objectPosition: "center",
  },
  currencyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    height: "1em",
    paddingRight: ".3em",
  },
  tableContainer: {
    width: "100%",
    maxHeight: "25em",
    overflow: "scroll",
    position: "relative",
    borderRadius: "0 !important",
    textAlign: "center",
  },
  tableHead: {
    position: "absolute",
    fontWeight: "bold !important",
    top: 0,
    height: "3em",
  },
  cell: {
    textAlign: "center !important",
    "& div": {
      textAlign: "center !important",
    },
  },
});
