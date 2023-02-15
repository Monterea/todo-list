import React from "react";
import { Route } from "react-router-dom";
import TodoContainer from "./functionBased/components/TodoContainer";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";
import Navbar from "./functionBased/components/Navbar";
import Switch from "react";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <TodoContainer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};
export default App;
