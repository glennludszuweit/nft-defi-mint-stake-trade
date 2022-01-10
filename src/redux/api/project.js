import axios from "axios";

const ES_API_KEY = process.env.REACT_APP_ES_API_KEY;

const api = {
  getTokenInfo: (tokenContract) => {
    return axios.get(
      `https://api.etherscan.io/api?module=token&action=tokeninfo&contractaddress=${tokenContract}&apikey=${ES_API_KEY}`
    );
  },
};

export default api;
