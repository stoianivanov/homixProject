import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Login from "./views/Login/Login"
import General from "./views/General/General";
import Skills from "./views/Skills/Skills";
import Courses from "./views/Courses/Courses";
import Personal from "./views/Personal/Personal";
import PastProjects from "./views/PastProjects/PastProjects";
import Teams from "./views/Teams/Teams";
import styles from "./App.css";


const App = () => (
  <Router>
    <Switch>
     <Route path="/login" component={Login} />
      <Route path="/general" component={General} />
      <Route path="/skills" component={Skills} />
      <Route path="/personal" component={Personal} />
      <Route path="/pastProjects" component={PastProjects} />
      <Route path="/courses" component={Courses} />
      <Route path="/teams" component={Teams} />
      
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
);

export default App;
