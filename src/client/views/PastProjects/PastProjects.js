import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Loader, Button, Form } from "semantic-ui-react";

import Header from "../Header/Header";
import Submodules from "./submodules/";
import { receivedPastProjects } from "../../store/actions/pastProjects";

const mapDispatchToProps = dispatch => ({
  receivePastProjects: data => dispatch(receivedPastProjects(data))
});

class PastProjects extends Component {
  constructor(props) {
    super(props);

    this.showForm = this.showForm.bind(this);

    this.state = {
      loadingPastProjects: false,
      showForm: false,
      projectName: "",
      projectRole: "",
      customer: "",
      team: "",
      tools: ""
    };
  }

  showForm() {
    this.setState({
      showForm: true
    });
  }

  componentDidMount() {
    this.setState({ loadingPastProjects: true });
    fetch("http://localhost:3000/allPastProjects")
      .then(response => response.json())
      .then(data => {
        this.setState({ loadingPastProjects: false });
        this.props.receivePastProjects(data);
      });
  }

  render() {
    return (
      <div>
        <Header activeItem={"pastProjects"} />
        <div style={{ padding: "1em" }}>
          <Button
            positive
            style={{ margin: "1em 0em" }}
            onClick={this.showForm}
          >
            Add
          </Button>
          {this.state.showForm && (
            <Form style={{ width: "70%", margin: "1em 0em" }}>
              <Form.Input
                fluid
                label="Project name"
                onChange={(e, { value }) =>
                  this.setState({ projectName: value })
                }
              />
              <Form.Input
                fluid
                label="Project Roles"
                onChange={(e, { value }) =>
                  this.setState({ projectRole: value })
                }
              />
              <Form.Input
                fluid
                label="Customer"
                onChange={(e, { value }) => this.setState({ customer: value })}
              />
              <Form.TextArea
                label="Project Description"
                placeholder="Tell us more about the project..."
                onChange={(e, { value }) =>
                  this.setState({ projectDescription: value })
                }
              />
              <Form.TextArea
                label="Project Participation"
                placeholder="Tell us more about what was your participation to the project..."
                onChange={(e, { value }) =>
                  this.setState({ projectParticipation: value })
                }
              />
              <Form.TextArea
                label="Team"
                onChange={(e, { value }) => this.setState({ team: value })}
              />
              <Form.TextArea
                label="Tools and Technologies"
                onChange={(e, { value }) => this.setState({ tools: value })}
              />
              <Form.Button
                onClick={() => {
                  const data = {
                    projectName: this.state.projectName,
                    projectRole: this.state.projectRole,
                    customer: this.state.customer,
                    team: this.state.team,
                    tools: this.state.tools
                  };

                  fetch("http://localhost:3000/pastProject", {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                  })
                    .then(() => response.json())
                    .then(() => {
                      console.log("maha se");
                      this.setState({
                        showForm: false,
                        projectName: "",
                        projectRole: "",
                        customer: "",
                        team: "",
                        tools: ""
                      });
                    });
                }}
              >
                Submit
              </Form.Button>
            </Form>
          )}
          {this.state.loadingPastProjects ? <Loader /> : <Submodules.Project />}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PastProjects);
