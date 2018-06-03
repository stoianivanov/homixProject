import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import Header from "../Header/Header";
import Submodules from "./submodules/";
import styles from "./General.css";

const General = () => (
  <Fragment>
    <Header activeItem={"general"} />
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <Submodules.InfoCard />
        <Submodules.Primary />
      </div>
      <Submodules.ProjectRole />
    </div>
  </Fragment>
);

export default General;
