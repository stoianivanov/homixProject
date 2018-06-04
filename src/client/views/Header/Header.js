import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { changeActiveItem } from "../../store/actions/header";

const mapDispatchToProps = dispatch => ({
  changeItem: (e, { name }) => dispatch(changeActiveItem(name))
});

const Header = ({ changeItem, location}) => (
  <Menu pointing secondary style={{ background: "white" }}>
    <Link to="/general">
      <Menu.Item
        name="general"
        active={location.pathname === "/general"}
        onClick={changeItem}
      />
    </Link>
    <Link to="/skills">
      <Menu.Item
        name="skills"
        active={location.pathname === "/skills"}
        onClick={changeItem}
      />
    </Link>
    <Link to="/personal">
      <Menu.Item
        name="personal"
        active={location.pathname === "/personal"}
        onClick={changeItem}
      />
    </Link>
    <Link to="/pastProjects">
      <Menu.Item
        name="pastProjects"
        active={location.pathname === "/pastProjects"}
        onClick={changeItem}
      />
    </Link>
    <Link to="/courses">
      <Menu.Item
        name="courses"
        active={location.pathname === "/courses"}
        onClick={changeItem}
      />
    </Link>
    <Link to="/teams">
      <Menu.Item
        name="teams"
        active={location.pathname === "/teams"}
        onClick={changeItem}
      />
    </Link>
  </Menu>
);

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
