import React from "react";
import { connect } from "react-redux";

import General from "./views/General/General";
import Skills from "./views/Skills/Skills";
import Courses from "./views/Courses/Courses";
import Personal from "./views/Personal/Personal";
import PastProjects from "./views/PastProjects/PastProjects";
import Teams from "./views/Teams/Teams";
import styles from "./App.css";

const mapStateToProps = state => ({
  activeItem: state.header.activeItem
});

// router
const App = ({ activeItem }) => {

  switch (activeItem) {
    case "general":
      return <General />;
    case "skills":
      return <Skills />;
    case "teams":
      return <Teams />;
    case "personal":
      return <Personal />;
    case "pastProjects":
      return <PastProjects />;
    case "courses":
      return <Courses />;
  }
};

export default connect(mapStateToProps)(App);
