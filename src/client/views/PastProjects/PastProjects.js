import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import Submodules from './submodules/';

const PastProjects = () => (
  <div>
    <Header activeItem={"pastProjects"} />
    <Submodules.Project />
  </div>
);

export default PastProjects;