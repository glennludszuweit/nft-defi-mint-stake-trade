import { AppBar, Toolbar, Stack } from "@mui/material/";
import { useStyles } from "./styles";
import Connect from "../Connect/Connect";
import MenuItems from "../MenuItems/MenuItems";

const Nav = ({ toggleMenu, setToggleMenu, address, setAddress }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Stack className={classes.container}>
          <MenuItems toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <Connect address={address} setAddress={setAddress} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
