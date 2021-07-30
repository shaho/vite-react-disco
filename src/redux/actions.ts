import * as constants from "./constants";
import { Filters, Todo } from "@/types";

export interface BaseAction {
  type: string;
  payload?: any;
}

export const getList = (): BaseAction => ({
  type: constants.GET_ALL,
  payload: {},
});
export const setList = (list: Todo[]): BaseAction => ({
  type: constants.SET_ALL,
  payload: {
    list,
  },
});
export const failure = (failure: boolean, message: string): BaseAction => ({
  type: constants.FAILURE,
  payload: {
    failure,
    message,
  },
});
export const loading = (loading: boolean): BaseAction => ({
  type: constants.LOADING,
  payload: {
    loading,
  },
});
export const filter = (filter?: Filters, keyword?: string): BaseAction => ({
  type: constants.FILTER,
  payload: {
    filter,
    keyword,
  },
});
export const setKeyword = (keyword: string): BaseAction => ({
  type: constants.SET_KEYWORD,
  payload: {
    keyword,
  },
});
export const setFilter = (filter: Filters): BaseAction => ({
  type: constants.SET_FILTER,
  payload: {
    filter,
  },
});
export const setFiltered = (filtered: Todo[]): BaseAction => ({
  type: constants.SET_FILTERED,
  payload: {
    filtered,
  },
});
