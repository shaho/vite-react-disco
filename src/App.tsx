import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import TodosTable from "./components/todos-table";
import Search from "./components/search";
import Filter from "./components/filter";
import GlobalStyle from "./styles/global-styles";
import { ApplicationState } from "./redux/store";
import { Todo } from "./types";
import Alert from "./components/alert";
import Loading from "./components/loading";
import { Container, Box } from "./styles";

function App() {
  const { failure, loading, list, message, filtered, filter, keyword } =
    useSelector((state: ApplicationState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getList());
    // will unmount
    return () => {
      dispatch(actions.setList([]));
    };
  }, [dispatch]);

  const renderTodos = (mlist?: Todo[]) => {
    const todos = keyword || filter !== "All" ? filtered : mlist;
    if (todos && todos.length) {
      return <TodosTable data={todos} />;
    }
    return <Alert>No result for the given search parameters!</Alert>;
  };

  return (
    <Container>
      <GlobalStyle />
      <h1>Todos</h1>
      {!loading && !failure && (
        <Box>
          <Search />
          <Filter />
        </Box>
      )}
      {failure && <Alert>Error: {message}</Alert>}
      {loading && <Loading />}
      {!loading && !failure && renderTodos(list)}
    </Container>
  );
}

export default App;
