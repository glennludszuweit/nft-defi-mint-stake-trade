import api from "../api/project";

const projectActions = {
  setProjectToken: (contractAddress) => async (dispatch) => {
    const { data } = await api.getTokenInfo(contractAddress);

    console.log(data);
    dispatch({
      type: "SET_PROJECT_TOKEN",
      details: data,
    });
  },
  setProjectCollection: (contractAddress) => async (dispatch) => {
    const { data } = await api.getTokenInfo(contractAddress);

    dispatch({
      type: "SET_PROJECT_COLLECTION",
      details: data,
    });
  },
};

export const { setProjectToken, setProjectCollection } = projectActions;
