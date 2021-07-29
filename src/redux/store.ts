import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import sagas from "./sagas";
import reducers, { StateType } from "./reducers";

export interface ApplicationState {
  app: StateType;
}
const rootSaga = function* () {
  yield all([...sagas]);
};
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  app: reducers,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export { store };
