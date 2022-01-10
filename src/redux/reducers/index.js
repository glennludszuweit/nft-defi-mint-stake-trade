import { combineReducers } from "redux";
import projectReducers from "./project";
import userReducers from "./user";
import openseaReducers from "./opensea";

const reducers = combineReducers({
  project: projectReducers,
  user: userReducers,
  opensea: openseaReducers,
});

export default reducers;
