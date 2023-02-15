import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import TodoContainer from "./functionBased/components/TodoContainer";
//import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*        <App />*/}
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
