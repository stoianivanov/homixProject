import React, { Component } from "react";
import { Card, Button, Checkbox, Form, Popup } from "semantic-ui-react";
import { connect } from "react-redux";
import { receivedAuth } from "../../store/actions/auth";
import { push, withRouter } from "react-router";

const mapStateToProps = state => ({
  user: state.general.user
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(receivedAuth(user))
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.state = {
      username: ""
    };
  }

  signIn() {
    fetch("http://localhost:3000/auth/")
      .then(response => response.json())
      .then(data => {
        // this.setState({ loadingPastProjects: false });
        const user = data.filter(e => {
          return e.username === this.state.username;
        });
        if (user.length > 0) {
          this.setState({
            username: user[0].username
          });
          this.props.fetchUser(user[0]);
          this.props.history.push("/general");
        } else {
          console.log("Fail");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <Card style={{ padding: "1em" }}>
          <Form>
            <Form.Field>
              <label>User name</label>
              <input
                placeholder="User name"
                value={this.state.username}
                onChange={e => {
                  this.setState({ username: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" type="password" />
            </Form.Field>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Button type="submit" onClick={this.signIn}>
                Sign In
              </Button>
              <Button type="submit">Sign Up</Button>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
