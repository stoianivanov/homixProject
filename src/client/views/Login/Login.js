import React, { Component } from "react";
import { Card, Button, Checkbox, Form, Popup } from "semantic-ui-react";
import { connect } from "react-redux";
import { receivedAuth } from "../../store/actions/auth";
import { withRouter } from "react-router";

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
    fetch(`http://localhost:3000/auth/${this.state.username}`)
      .then(response => response.json())
      .then(data => {
        // this.setState({ loadingPastProjects: false });
        const user = data.filter(e => {
          return e.email === this.state.username;
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
          height: "100%",
          backgroundImage:
            "url(http://totceeaceeste.ro/wp-content/uploads/2017/08/mea1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Card style={{ padding: "1em" }}>
          <Card.Content>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input
                  value={this.state.username}
                  onChange={e => {
                    this.setState({ username: e.target.value.trim() });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type="password" />
              </Form.Field>
              <Button type="submit" primary fluid onClick={this.signIn}>
                Sign In
              </Button>
            </Form>
          </Card.Content>
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
