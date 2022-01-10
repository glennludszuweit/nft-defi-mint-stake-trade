import { Grid, Stack, Typography } from "@mui/material";
import {
  useStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./styles";

const Assets = ({ assets }) => {
  const classes = useStyles();

  return (
    <>
      <Accordion>
        <AccordionSummary className={classes.header}>
          <Typography>Balance and Rewards</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Stack sx={{ pb: 3 }}>
                <Typography variant='h6'>You've got:</Typography>
                <Typography variant='h4'>1,620,000 YOLOvs</Typography>
                <Typography>Earning 320 YOLOvs daily with 235% APY</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack sx={{ pb: 3 }}>
                <Typography variant='h6'>Unclaimed rewards:</Typography>
                <Typography variant='h4'>20,000 YOLOvs</Typography>
              </Stack>
              <Stack sx={{ pb: 3 }}>
                <Typography variant='h6'>Claimed rewards:</Typography>
                <Typography variant='h4'>130,000 YOLOvs</Typography>
              </Stack>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className={classes.header}>
          <Typography>Bulls on the Block</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {assets.length ? (
            <div className={classes.assets}>
              {assets.map((asset) => (
                <img
                  className={classes.assetImg}
                  src={asset.image_url}
                  alt={asset.image_original_url}
                  key={asset.id}
                />
              ))}
            </div>
          ) : null}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Assets;
