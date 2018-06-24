import React, { Component, Fragment } from "react";

import Header from "../Header/Header";
import Developers from "./submodules/Developers";

class DevelopersSearch extends Component {
  render() {
    return (
      <Fragment>
        <Header activeItem={"developers"} />
        <Developers />
      </Fragment>
    );
  }
}
export default DevelopersSearch;
