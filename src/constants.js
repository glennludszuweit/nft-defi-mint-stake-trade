import { OpenSeaPort, Network } from "opensea-js";

const provider = window.ethereum;

const constants = {
  MENU_ITEMS: [
    { url: "/", text: "Dashboard", icon: <></> },
    { url: "/assets", text: "Assets", icon: <></> },
    { url: "/stake", text: "Stake", icon: <></> },
    { url: "/game", text: "Game", icon: <></> },
    { url: "/mint", text: "Mint", icon: <></> },
    { url: "/opensea-x", text: "OpenseaX", icon: <></> },
  ],
  SEA_PORT: new OpenSeaPort(provider, {
    networkName: Network.Main,
    apiKey: process.env.REACT_APP_OS_API_KEY,
  }),
};

export const { MENU_ITEMS, SEA_PORT } = constants;
