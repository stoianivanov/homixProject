import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from "./views/Login/Login";
import General from "./views/General/General";
import Skills from "./views/Skills/Skills";
import PastProjects from "./views/PastProjects/PastProjects";
import Teams from "./views/Teams/Teams";
import DevelopersSearch from "./views/DevelopersSearch/DevelopersSearch";
import PrivateRoute from "./PrivateRoute";

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/general" PrivateComponent={General} />
      <PrivateRoute path="/skills" PrivateComponent={Skills} />
      <PrivateRoute path="/pastProjects" PrivateComponent={PastProjects} />
      <PrivateRoute path="/teams" PrivateComponent={Teams} />
      <PrivateRoute path="/developers" PrivateComponent={DevelopersSearch} />

      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
);

export default App;
