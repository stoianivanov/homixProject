import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import styles from "./InfoCard.css";

const mapStateToProps = state => ({
  user: state.general.user
});

const InfoCard = ({ user }) => (
  <div className={styles.card}>
    <img className={styles.profilePicture} src={user.profilePicture} />
    <div className={styles.userInfo}>
      <span>
        {user.firstName} {user.lastName}
      </span>
      <span>{user.position}</span>
      <span>{user.email}</span>
      <span>{user.phone}</span>
    </div>
  </div>
);

export default connect(mapStateToProps)(InfoCard);
