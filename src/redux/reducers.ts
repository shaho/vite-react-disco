import * as constants from "./constants";
import { BaseAction } from "./actions";
import { Todo, Filters } from "../types";

export interface StateType {
  list?: Todo[];
  filtered?: Todo[];
  filter: Filters;
  keyword: string;
  failure: boolean;
  message: string;
  loading: boolean;
}
const initial: StateType = {
  list: [],
  filtered: [],
  filter: "All",
  keyword: "",
  failure: false,
  message: "",
  loading: false,
};
function reducer(state = initial, action: BaseAction) {
  switch (action.type) {
    case constants.SET_ALL:
      return { ...state, ...action.payload };
    case constants.SET_FILTERED:
      return { ...state, ...action.payload };
    case constants.SET_FILTER:
      return { ...state, ...action.payload };
    case constants.SET_KEYWORD:
      return { ...state, ...action.payload };
    case constants.FAILURE:
      return { ...state, ...action.payload };
    case constants.LOADING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default reducer;
