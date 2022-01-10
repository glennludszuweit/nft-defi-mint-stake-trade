import thunk from "redux-thunk";
import localForage from "localforage";
import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { initialState } from "../initialState";

const persistConfig = {
  key: "GNGLAB_State",
  storage: localForage,
};

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_DATA") {
    return reducers({ initialState }, action);
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor, initialState };
