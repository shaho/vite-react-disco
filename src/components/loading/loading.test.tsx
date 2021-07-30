import { render } from "@testing-library/react";

import Loading from ".";

describe("Loading Component", () => {
  test("renders", () => {
    const { container } = render(<Loading />);
    expect(container.querySelectorAll("div")).toHaveLength(1);
  });
});
