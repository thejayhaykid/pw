import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route /** , Link*/,
} from "react-router-dom";
import PasswordGenerator from "./pages/passwordGenerator/passwordGenerator";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Styles from "./App.module.scss";
import NoMatch from "./pages/404/404";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/pw">
            <PasswordGenerator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
