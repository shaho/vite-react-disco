import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import * as actions from "../../redux/actions";
import Filter from ".";
import { AnyAction, Store } from "redux";
import { Filters } from "../../types";

const dispatchedActions: AnyAction[] = [];
const fakeStore: Store<any, AnyAction> = {
  getState: (): any => ({
    app: {
      list: [],
      filtered: [],
      filter: "All",
      keyword: "my sample keyword",
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

describe("Filter Component", () => {
  test("renders", () => {
    const { container, getByText } = render(
      <ReduxProvider store={fakeStore}>
        <Filter />
      </ReduxProvider>,
    );
    expect(container).toBeTruthy();
    expect(getByText("Completed:")).toBeTruthy();
  });
  test("handle filter", () => {
    const { getByTestId } = render(
      <ReduxProvider store={fakeStore}>
        <Filter />
      </ReduxProvider>,
    );
    fireEvent.change(getByTestId("custom-select"), {
      target: { value: 1 },
    });
    const vals: Filters[] = ["All", "Completed", "NotCompleted"];
    expect(dispatchedActions).toContainEqual(
      actions.filter(vals[1], "my sample keyword"),
    );
  });
});
