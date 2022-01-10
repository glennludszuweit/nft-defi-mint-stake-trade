import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const useStyles = makeStyles((theme) => ({
  header: {
    padding: ".75em 1em",
    textTransform: "uppercase",
    width: "100%",
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "space-between",
  },
  assets: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexShrink: 3,
    flexWrap: "wrap",
  },
  assetImg: {
    margin: ".5em",
    maxWidth: "10em",
    maxHeight: "10em",
    objectFit: "contain",
  },
}));

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharp sx={{ fontSize: "0.9rem", color: "#F7F6F2" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  color: theme.palette.secondary.main,
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
