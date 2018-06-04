import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import General from "./views/General/General";
import Skills from "./views/Skills/Skills";
import Courses from "./views/Courses/Courses";
import Personal from "./views/Personal/Personal";
import PastProjects from "./views/PastProjects/PastProjects";
import Teams from "./views/Teams/Teams";
import styles from "./App.css";

// const routes = [
//   {
//     path: "/general",
//     component: General
//   },
//   {
//     path: "/skills",
//     component: Skills
//   },
//   {
//     path: "/personal",
//     component: Personal
//   },
//   {
//     path: "/pastProjects",
//     component: PastProjects
//   },
//   {
//     path: "/courses",
//     component: Courses
//   }
// ];

const App = () => (
  <Router>
    <Switch>
      <Route path="/general" component={General} />
      <Route path="/skills" component={Skills} />
      <Route path="/personal" component={Personal} />
      <Route path="/pastProjects" component={PastProjects} />
      <Route path="/courses" component={Courses} />
      <Route path="/teams" component={Teams} />
      
      <Redirect from="/" to="/general" />
    </Switch>
  </Router>
);

export default App;
