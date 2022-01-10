import { AppBar, Toolbar, Stack } from "@mui/material/";
import { useStyles } from "./styles";
import Connect from "../Connect/Connect";
import MenuItems from "../MenuItems/MenuItems";

const Nav = ({ toggleMenu, setToggleMenu, setAddress, wallet, balance }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Stack className={classes.container}>
          <MenuItems toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <Connect setAddress={setAddress} wallet={wallet} balance={balance} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
