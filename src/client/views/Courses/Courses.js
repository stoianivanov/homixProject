import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import CourseCard from "./submodules/CourseCard";

const mapStateToProps = state => ({
  courses: state.courses.courses
});

const Courses = ({ courses }) => (
  <Fragment>
    <Header activeItem={"general"} />
    <CourseCard />
  </Fragment>
);

export default Courses;
