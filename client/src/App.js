import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";

import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {StoreProvider} from "./utils/GlobalState";

import SubmitDone from "./pages/SubmitDone";

function App() {
  return (
    <Router>

      <StoreProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/submit" component={SubmitDone} />
          <Route component={NoMatch} />
        </Switch>
      </StoreProvider>

    </Router>
  );
}

export default App;
