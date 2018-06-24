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
import Courses from "./views/Courses/Courses";
import Personal from "./views/Personal/Personal";
import PastProjects from "./views/PastProjects/PastProjects";
import Teams from "./views/Teams/Teams";
import PrivateRoute from "./PrivateRoute";

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/general" PrivateComponent={General} />
      <PrivateRoute path="/skills" PrivateComponent={Skills} />
      <PrivateRoute path="/personal" PrivateComponent={Personal} />
      <PrivateRoute path="/pastProjects" PrivateComponent={PastProjects} />
      <PrivateRoute path="/courses" PrivateComponent={Courses} />
      <PrivateRoute path="/teams" PrivateComponent={Teams} />

      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
);

export default App;
