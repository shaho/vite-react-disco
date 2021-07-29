import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import * as actions from "../../redux/actions";
import Search from ".";
import { AnyAction, Store } from "redux";

const dispatchedActions: AnyAction[] = [];
const fakeStore: Store<any, AnyAction> = {
  getState: (): any => ({
    app: {
      list: [],
      filtered: [],
      filter: "All",
      keyword: "",
      failure: false,
      message: "",
      loading: false,
    },
  }),
  subscribe: (): any => {},
  dispatch: (action: AnyAction): any => dispatchedActions.push(action),
  replaceReducer: (): void => {},
  [Symbol.observable]: (): any => {},
};

describe("Search Component", () => {
  test("renders", () => {
    const { container, getByText } = render(
      <ReduxProvider store={fakeStore}>
        <Search />
      </ReduxProvider>,
    );
    expect(container).toBeTruthy();
    expect(getByText("Search:")).toBeTruthy();
  });
  test("handle search", () => {
    const { getByPlaceholderText } = render(
      <ReduxProvider store={fakeStore}>
        <Search />
      </ReduxProvider>,
    );
    fireEvent.change(getByPlaceholderText("search ..."), {
      target: { value: "hello" },
    });
    expect(dispatchedActions).toContainEqual(actions.filter("All", "hello"));
  });
});
