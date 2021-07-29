import * as helpers from ".";
import { data } from "../../test/mock-data";

describe("Helpers", () => {
  test("filterList() All", () => {
    expect(helpers.filterList(data, "All")).toEqual(data);
  });
  test("filterList() Completed", () => {
    expect(helpers.filterList(data, "Completed")).toHaveLength(90);
  });
  test("filterList() NotCompleted", () => {
    expect(helpers.filterList(data, "NotCompleted")).toHaveLength(110);
  });
  test("searchList()", () => {
    expect(helpers.searchList(data, "dele")).toHaveLength(11);
    expect(helpers.searchList(data, "mohsen")).toHaveLength(0);
  });
});
