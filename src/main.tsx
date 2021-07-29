import { StrictMode } from "react";

import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./redux/store";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
  document.getElementById("root"),
);
