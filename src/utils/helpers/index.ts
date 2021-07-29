import { Filters, Todo } from "../../types";

export function filterList(list: Todo[], filter: Filters): Todo[] {
  switch (filter) {
    case "All":
      return [...list];
    case "Completed":
      return [...list].filter((item) => item.completed);
    case "NotCompleted":
      return [...list].filter((item) => !item.completed);
    default:
      return list;
  }
}
export function searchList(list: Todo[], keyword?: string): Todo[] {
  if (!keyword) {
    return [...list];
  }
  return [...list].filter((item) => item.title.includes(keyword));
}
