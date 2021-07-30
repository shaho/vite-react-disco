import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState } from "@/redux/store";
import { Filters } from "@/types";
import * as actions from "@/redux/actions";

import { FilterBox } from "./styles";

export default function Filter() {
  const dispatch = useDispatch();
  const { keyword } = useSelector((state: ApplicationState) => state.app);
  const [val, setVal] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setVal(Number(e.target.value));
    const vals: Filters[] = ["All", "Completed", "NotCompleted"];
    const selected = vals[Number(e.target.value)];
    dispatch(actions.filter(selected, keyword));
  };

  return (
    <FilterBox>
      <strong>Completed: </strong>
      <select onChange={handleChange} value={val} data-testid="custom-select">
        <option value={0}>-</option>
        <option value={1}>Yes</option>
        <option value={2}>No</option>
      </select>
    </FilterBox>
  );
}
