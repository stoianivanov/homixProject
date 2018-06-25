import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import Skill from "./submodules/Skill";
import { Card, Loader, Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { receiveUser } from "../../store/actions/user";

const mapStateToProps = state => ({
  user: state.general.user,
  loggedUser: state.auth.loggedUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(receiveUser(user))
});

class Skills extends Component {
  constructor(props) {
    super(props);

    this.showForm = this.showForm.bind(this);

    this.state = {
      loadingTeams: false,
      showForm: false,
      name: "",
      level: "",
      description: ""
    };
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  componentDidMount() {
    fetch(`http://localhost:3000/user/${this.props.loggedUser.email}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ loadingTeams: false });
        this.props.fetchUser(data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    if (this.state.loadingTeams) {
      return <Loader />;
    }
    return (
      <Fragment>
        <Header activeItem={"skills"} />
        <div style={{ padding: "1em" }}>
          <Button
            positive
            style={{ margin: "1em 0em" }}
            onClick={this.showForm}
          >
            Add Skill
          </Button>
          {this.state.showForm && (
            <Card.Group>
              <Form style={{ width: "50%", margin: "1em 0em" }}>
                <Form.Input
                  fluid
                  label="Name"
                  onChange={(e, { value }) => this.setState({ name: value })}
                />
                <Form.Input
                  fluid
                  label="Level"
                  onChange={(e, { value }) => this.setState({ level: value })}
                />
                <Form.Input
                  fluid
                  label="Description"
                  onChange={(e, { value }) =>
                    this.setState({ description: value })
                  }
                />
                <Form.Button
                  onClick={() => {
                    const obj = { ...this.props.user };
                    const skill = {
                      name: this.state.name,
                      level: this.state.level,
                      description: this.state.description
                    };
                    const data = {
                      userId: this.props.user._id,
                      skills: [...obj.skills, skill]
                    };

                    obj.skills = [...obj.skills, skill];
                    fetch("http://localhost:3000/user/skills", {
                      method: "put",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(data)
                    })
                      // .then(() => response.json())
                      .then(() => {
                        this.setState({
                          showForm: false,
                          name: "",
                          level: "",
                          description: ""
                        });
                        this.props.fetchUser(obj);
                      });
                  }}
                >
                  Submit
                </Form.Button>
              </Form>
            </Card.Group>
          )}
          <Card.Group>
            {this.props.user.skills.map(skill => <Skill skill={skill} />)}
          </Card.Group>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
