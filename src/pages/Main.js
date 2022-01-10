import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { seaport } from "../opensea";
import {
  setProjectCollection,
  setProjectToken,
} from "../redux/actions/project";
import {
  getWalletAssets,
  getWalletBalance,
  setWalletAddress,
} from "../redux/actions/user";
import { Paper, Container, Toolbar, Box, CssBaseline } from "@mui/material";
import { useStyles } from "./styles";

import Nav from "../components/Nav/Nav";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Auth from "./Auth/Auth";
import Game from "./Game/Game";
import Assets from "./Assets/Assets";
import Stake from "./Stake/Stake";
import Mint from "./Mint/Mint";
import Error from "./Error/Error";
import OpenseaX from "./OpenseaX/OpenseaX";

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //PROJECT
  const token = useSelector((state) => state.project.token);
  const collection = useSelector((state) => state.project.collection);
  //USER
  const wallet = useSelector((state) => state.user.wallet);
  const balance = useSelector((state) => state.user.balance);
  const assets = useSelector((state) => state.user.assets);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    dispatch(setProjectToken(token.address));
    dispatch(setProjectCollection(collection.address));
  }, []);

  useEffect(() => {
    if (!wallet) {
      dispatch(setWalletAddress(address));
    }
  }, [address]);

  useEffect(() => {
    if (wallet) {
      dispatch(getWalletBalance(token.address, wallet));
      dispatch(getWalletAssets(collection.address, wallet));
    }
  }, [wallet]);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Nav
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        setAddress={setAddress}
        wallet={wallet}
        balance={balance}
      />
      {toggleMenu && <MobileMenu setToggleMenu={setToggleMenu} />}
      <Box component='main' className={classes.wrapper}>
        <Toolbar />
        <Container className={classes.container}>
          <Paper className={classes.main}>
            <Routes>
              <Route exact path='/' element={<Assets assets={assets} />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/error' element={<Error />} />
              <Route path='/game' element={<Game />} />
              <Route path='/stake' element={<Stake />} />
              <Route path='/mint' element={<Mint />} />
              <Route
                path='/opensea-x'
                element={<OpenseaX seaport={seaport} />}
              />
            </Routes>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Main;
