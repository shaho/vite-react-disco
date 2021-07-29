import React from "react";
import { render } from "@testing-library/react";
import { data } from "../../test/mock-data";
import TodosTable from ".";

describe("TodosTable Component", () => {
  test("renders", () => {
    const { container, getByText } = render(<TodosTable data={data} />);
    expect(container).toBeTruthy();
    expect(getByText(/quis ut nam facilis et officia qui/)).toBeTruthy();
    expect(
      getByText(/illo est ratione doloremque quia maiores au/),
    ).toBeTruthy();
    expect(container.querySelectorAll("tr")).toHaveLength(201);
    expect(container.querySelectorAll("td")).toHaveLength(600);
  });
});
