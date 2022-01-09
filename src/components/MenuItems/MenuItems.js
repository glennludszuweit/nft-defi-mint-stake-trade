import { MENU_ITEMS } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { Stack, Button, IconButton } from "@mui/material/";
import { Menu } from "@mui/icons-material";
import { useStyles } from "./styles";

const MenuItems = ({ toggleMenu, setToggleMenu }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <IconButton
        className={classes.menuIcon}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <Menu color='secondary' />
      </IconButton>
      <Stack className={classes.menuItems} direction='row'>
        {MENU_ITEMS.map((item) => (
          <Link className={classes.menuItem} to={item.url} key={item.text}>
            <Button
              variant='outlined'
              color='secondary'
              disabled={location.pathname === item.url}
            >
              {item.text}
            </Button>
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default MenuItems;
