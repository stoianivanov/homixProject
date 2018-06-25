import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import PersonalInfomation from "./submodules/PesonalInformation";

const Personal = () => (
  <div>
    <Header activeItem={"personal"} />
    <PersonalInfomation />
  </div>
);

export default Personal;
