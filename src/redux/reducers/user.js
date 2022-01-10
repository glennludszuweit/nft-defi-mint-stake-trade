import { INITIAL_STATE } from "../../constants";

const userReducers = (state = INITIAL_STATE.user, action) => {
  switch (action.type) {
    case "SET_WALLET_ADDRESS":
      return {
        ...state,
        wallet: action.wallet,
      };

    case "GET_WALLET_BALANCE":
      return {
        ...state,
        balance: action.balance,
      };

    case "GET_WALLET_ASSETS":
      return {
        ...state,
        assets: action.assets,
      };

    default:
      return state;
  }
};

export default userReducers;
