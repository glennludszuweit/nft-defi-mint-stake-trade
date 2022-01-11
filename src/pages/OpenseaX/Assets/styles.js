import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  wrapper: {
    width: "100% !important",
    height: "100vh",
    overflow: "auto",
    margin: "0 !important",
  },
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    position: "relative",
    cursor: "pointer",
    "& .css-dasnyc-MuiImageListItemBar-title": {
      color: "#181D31 !important",
    },
  },
  card: {
    maxWidth: "195px",
    boxShadow: "none !important",
    borderRadius: "0 !important",
    margin: "5px",
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
