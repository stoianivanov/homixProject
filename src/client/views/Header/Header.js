import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import { changeActiveItem } from "../../store/actions/header";

const mapStateToProps = state => ({
  activeItem: state.header.activeItem
});

const mapDispatchToProps = dispatch => ({
  changeItem: (e, { name }) => dispatch(changeActiveItem(name))
});

const Header = ({ activeItem, changeItem }) => (
  <Menu pointing secondary>
    <Menu.Item
      name="general"
      active={activeItem === "general"}
      onClick={changeItem}
    />{" "}
    <Menu.Item
      name="skills"
      active={activeItem === "skills"}
      onClick={changeItem}
    />{" "}
    {" "}
    <Menu.Item
      name="personal"
      active={activeItem === "personal"}
      onClick={changeItem}
    />{" "}
    {" "}
    <Menu.Item
      name="pastProjects"
      active={activeItem === "pastProjects"}
      onClick={changeItem}
    />{" "}
    {" "}
    <Menu.Item
      name="courses"
      active={activeItem === "courses"}
      onClick={changeItem}
    />{" "}
    {" "}
    <Menu.Item
      name="teams"
      active={activeItem === "teams"}
      onClick={changeItem}
    />{" "}
    {" "}
  </Menu>
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
