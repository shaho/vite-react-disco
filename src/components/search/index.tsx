import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../redux/store";
import * as actions from "../../redux/actions";
import { SearchBox, Input, Form } from "./styles";

function Search() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: ApplicationState) => state.app);
  const [val, setVal] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    dispatch(actions.filter(filter, e.target.value.trim()));
  };

  return (
    <SearchBox>
      <strong>Search:</strong>
      <Form>
        <Input
          type="text"
          className="input"
          name="search"
          data-testid="custom-element"
          onChange={handleChange}
          placeholder="search ..."
          value={val}
        />
      </Form>
    </SearchBox>
  );
}

export default Search;
