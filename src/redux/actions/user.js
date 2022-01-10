import { formatTokenAmount } from "../../utils";
import api from "../api/user";

const userActions = {
  setWalletAddress: (address) => (dispatch) => {
    dispatch({
      type: "SET_WALLET_ADDRESS",
      wallet: address,
    });
  },

  getWalletBalance: (tokenContract, walletAddress) => async (dispatch) => {
    const { data } = await api.getWalletBalance(tokenContract, walletAddress);
    const balance = await data.result;

    dispatch({
      type: "GET_WALLET_BALANCE",
      balance: formatTokenAmount(balance),
    });
  },

  getWalletAssets: (collectionContract, walletAddress) => async (dispatch) => {
    const { data } = await api.getWalletAssets(
      collectionContract,
      walletAddress
    );
    const assets = await data.assets;

    dispatch({
      type: "GET_WALLET_ASSETS",
      assets,
    });
  },
};

export const { setWalletAddress, getWalletBalance, getWalletAssets } =
  userActions;
