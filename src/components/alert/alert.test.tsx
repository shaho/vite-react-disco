import React from "react";
import { render } from "@testing-library/react";
import Alert from ".";

describe("Alert Component", () => {
  test("renders", () => {
    const { container, getByText } = render(<Alert>Hello</Alert>);
    expect(container.querySelectorAll("div")).toHaveLength(1);
    expect(getByText("Hello")).toBeTruthy();
  });
});
