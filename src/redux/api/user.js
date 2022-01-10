import axios from "axios";

const ES_API_KEY = process.env.REACT_APP_ES_API_KEY;
const OS_API_KEY = process.env.REACT_APP_OS_API_KEY;

const options = { method: "GET", headers: { "X-API-KEY": OS_API_KEY } };

const api = {
  getWalletBalance: (tokenContract, walletAddress) => {
    return axios.get(
      `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${tokenContract}&address=${walletAddress}&tag=latest&apikey=${ES_API_KEY}`
    );
  },
  getWalletAssets: (collectionContract, walletAddress) => {
    return axios.get(
      `https://api.opensea.io/api/v1/assets?owner=${walletAddress}&asset_contract_address=${collectionContract}&order_by=sale_date&order_direction=asc&offset=0&limit=50`,
      options
    );
  },
};

export default api;
