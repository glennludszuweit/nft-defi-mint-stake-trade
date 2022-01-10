import { AccountBalanceWallet } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useStyles } from "./styles";

const Connect = ({ setAddress, wallet, balance }) => {
  const classes = useStyles();

  const handleConnect = async () => {
    let provider = window.ethereum;
    if (typeof provider !== "undefined") {
      const res = await provider
        .request({ method: "eth_requestAccounts" })
        .then((acc) => acc);

      setAddress(res[0]);
    }
  };

  return !wallet ? (
    <Button
      onClick={handleConnect}
      className={classes.connect}
      variant='contained'
      color='secondary'
    >
      Connect
    </Button>
  ) : (
    <Button
      onClick={() => {}}
      className={classes.connected}
      variant='contained'
      color='secondary'
    >
      <AccountBalanceWallet sx={{ mr: 1 }} /> {balance}
    </Button>
  );
};

export default Connect;
