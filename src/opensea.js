import { OpenSeaPort, Network } from "opensea-js";

const provider = window.ethereum;

export const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
  apiKey: process.env.REACT_APP_OS_API_KEY,
});
