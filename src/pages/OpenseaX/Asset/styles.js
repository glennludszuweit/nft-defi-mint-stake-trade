import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100% !important",
    margin: "3em 0",
    display: "flex",
    justifyContent: "center",
  },
  item: {
    position: "relative",
    cursor: "pointer",
    "& .css-dasnyc-MuiImageListItemBar-title": {
      color: "#181D31 !important",
    },
  },
  card: {
    width: "100%",
    boxShadow: "none !important",
    margin: "5px",
    borderRadius: "0 !important",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  imgHeader: {
    backgroundColor: "#F0E9D2",
  },
  addToList: {
    position: "absolute !important",
    color: "#fff !important",
    top: 5,
    right: 5,
    zIndex: 2,
    padding: "3px !important",
    backgroundColor: "rgba(0,0,0,0.8) !important",
    borderRadius: "0 !important",
  },
});
