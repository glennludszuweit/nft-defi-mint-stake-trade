import { MENU_ITEMS } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { Paper, Stack, Button } from "@mui/material/";
import { useStyles } from "./styles";

const MobileMenu = ({ setToggleMenu }) => {
  const classes = useStyles();
  const location = useLocation();

  const disableButton = (url) => location.pathname === url;

  return (
    <Paper variant='outlined' className={classes.container}>
      <Stack className={classes.menuItems}>
        {MENU_ITEMS.map((item) => (
          <Link
            className={classes.menuItem}
            to={item.url}
            onClick={() => setToggleMenu(false)}
            key={item.text}
            style={{
              mouseEvents: disableButton(item.url) ? "none" : "auto",
              cursor: disableButton(item.url) ? "unset" : "pointer",
            }}
          >
            <Button
              variant='outlined'
              color='secondary'
              disabled={disableButton(item.url)}
            >
              {item.text}
            </Button>
          </Link>
        ))}
      </Stack>
    </Paper>
  );
};

export default MobileMenu;
