import { Todo } from "@/types";

import { Table } from "./styles";

type Props = {
  data: Todo[];
};

export default function TodosTable({ data }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: Todo, index: number) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.completed ? "yes" : "no"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
