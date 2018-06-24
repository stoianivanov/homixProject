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
      <Menu.Item header>HOMIX</Menu.Item>
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
      <Link to="/pastProjects">
        <Menu.Item
          name="pastProjects"
          active={location.pathname === "/pastProjects"}
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
      <Link to="/developers">
        <Menu.Item
          name="developers"
          active={location.pathname === "/developers"}
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
              justifyContent: "space-between",
              cursor: "pointer",
              marginRight: "1em"
            }}
          >
            <span style={{ marginRight: "1em" }}>{loggedUser.name}</span>
            <Image avatar src={loggedUser.profilePicture} />
          </div>
        }
        content={
          <Item
            style={{ cursor: "pointer" }}
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
