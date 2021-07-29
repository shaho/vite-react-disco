import {
  put,
  takeLatest,
  call,
  PutEffect,
  CallEffect,
  select,
} from "redux-saga/effects";
import * as actions from "./actions";
import * as constants from "./constants";
import * as services from "../utils/services";
import * as helpers from "../utils/helpers";
import { AxiosResponse } from "axios";
import { BaseAction } from "./actions";
import { ApplicationState } from "./store";
import { Todo } from "types";

export const getStoredTodos = (state: ApplicationState) => state.app.list;

export function* getAllTodos(): Generator<
  PutEffect<actions.BaseAction> | CallEffect<AxiosResponse<any>>,
  void,
  any
> {
  try {
    yield put(actions.loading(true));
    const response: any = yield call(services.getTodos);
    yield put(actions.setList(response.data));
  } catch (error) {
    yield put(actions.failure(true, error.message));
  } finally {
    yield put(actions.loading(false));
  }
}
export function* getAllTodosSaga() {
  yield takeLatest(constants.GET_ALL, getAllTodos);
}

export function* filterTodos(action: BaseAction) {
  const items: Todo[] = yield select(getStoredTodos);
  const filtered: Todo[] = helpers.filterList(items, action.payload.filter);
  yield put(actions.setFilter(action.payload.filter));
  const searchResults: Todo[] = helpers.searchList(
    filtered,
    action.payload.keyword,
  );
  yield put(actions.setKeyword(action.payload.keyword));
  yield put(actions.setFiltered(searchResults));
}
export function* searchTodosSaga() {
  yield takeLatest(constants.FILTER, filterTodos);
}

const Sagas = [getAllTodosSaga(), searchTodosSaga()];
export default Sagas;
