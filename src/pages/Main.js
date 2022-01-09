import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SEA_PORT } from "../constants";
import { Paper, Container, Toolbar, Box, CssBaseline } from "@mui/material";
import { useStyles } from "./styles";

import Nav from "../components/Nav/Nav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Auth from "./Auth/Auth";
import Dashboard from "./Dashboard/Dashboard";
import Game from "./Game/Game";
import Assets from "./Assets/Assets";
import Stake from "./Stake/Stake";
import Mint from "./Mint/Mint";
import Error from "./Error/Error";
import OpenseaX from "./OpenseaX/OpenseaX";

const Main = () => {
  const classes = useStyles();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [address, setAddress] = useState("false");

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Nav
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        address={address}
        setAddress={setAddress}
      />
      {toggleMenu && <MobileMenu setToggleMenu={setToggleMenu} />}
      <Box component='main' className={classes.wrapper}>
        <Toolbar />
        <Container className={classes.container}>
          <Paper className={classes.main}>
            <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/error' element={<Error />} />
              <Route path='/assets' element={<Assets />} />
              <Route path='/game' element={<Game />} />
              <Route path='/stake' element={<Stake />} />
              <Route path='/mint' element={<Mint />} />
              <Route
                path='/opensea-x'
                element={<OpenseaX seaport={SEA_PORT} />}
              />
            </Routes>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Main;
