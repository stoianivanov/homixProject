import React, { Component } from "react";
import { Menu, Segment, Image, Popup, Item } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { changeActiveItem } from "../../store/actions/header";
import { logoutUser } from "../../store/actions/auth";

const mapStateToProps = state => ({
  loggedUser: state.auth.loggedUser
});

const mapDispatchToProps = dispatch => ({
  changeItem: (e, { name }) => dispatch(changeActiveItem(name)),
  logout: () => {
    dispatch(logoutUser());
  }
});

const Header = ({ changeItem, loggedUser, logout, location, history }) => (
  <Menu pointing secondary style={{ background: "white" }}>
    <Menu.Menu position="left">
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
    </Menu.Menu>
    <Menu.Menu position="right">
      <Popup
        trigger={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <span>{loggedUser.firstName}</span>
            <Image avatar src={loggedUser.profilePicture} />
          </div>
        }
        content={
          <Item
            onClick={() => {
              logout();
              history.push("/login");
            }}
          >
            Logout
          </Item>
        }
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
