import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  isUserAuthenticated: state.auth.isAuthenticaded
});

class PrivateRoute extends Component {
  render() {
    const { isUserAuthenticated, PrivateComponent } = this.props;
    if (isUserAuthenticated) {
      return <PrivateComponent {...this.props} />;
    }
    return <Redirect to="/login" />;
  }
}

export default connect(mapStateToProps)(PrivateRoute);
