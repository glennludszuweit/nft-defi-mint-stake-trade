import { initialState } from "../../initialState";

const projectReducers = (state = initialState.project, action) => {
  switch (action.type) {
    // WALLET ADDRESS
    case "SET_PROJECT_TOKEN":
      return {
        ...state,
        token: {
          ...state.token,
          details: action.tokenInfo,
        },
      };

    case "SET_PROJECT_COLLECTION":
      return {
        ...state,
        collection: {
          ...state.collection,
          details: action.collectionInfo,
        },
      };

    default:
      return state;
  }
};

export default projectReducers;
