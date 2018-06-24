import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "../Header/Header";
import Submodules from "./submodules/";
import styles from "./General.css";
import { receiveUser } from "../../store/actions/user";

const mapStateToProps = state => ({
  user: state.general.user,
  loggedUser: state.auth.loggedUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(receiveUser(user))
});

class General extends Component {
  componentDidMount() {
    fetch(`http://localhost:3000/user/${this.props.loggedUser.email}`)
      .then(response => response.json())
      .then(data => {
        this.props.fetchUser(data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
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
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(General);
