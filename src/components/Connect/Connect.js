import { Button } from "@mui/material";
import { useStyles } from "./styles";

const Connect = ({ address, setAddress }) => {
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

  return (
    <Button
      onClick={handleConnect}
      className={classes.connect}
      variant='contained'
      color='secondary'
    >
      {!address ? "Connect" : address}
    </Button>
  );
};

export default Connect;
