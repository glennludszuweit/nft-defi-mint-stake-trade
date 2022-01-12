import { Box, Typography, CircularProgress } from "@mui/material";
import { useStyles } from "./styles";

const Loading = () => {
  const classes = useStyles();

  return (
    <Box component={Typography} className={classes.box}>
      <CircularProgress className={classes.loading} />
    </Box>
  );
};

export default Loading;
