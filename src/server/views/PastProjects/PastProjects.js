import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";

import Header from "../Header/Header";
import Submodules from "./submodules/";
import { receivedPastProjects } from "../../store/actions/pastProjects";

const mapDispatchToProps = dispatch => ({
  receivePastProjects: data => dispatch(receivedPastProjects(data))
});

class PastProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPastProjects: false
    };
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
        {this.state.loadingPastProjects ? <Loader /> : <Submodules.Project />}
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PastProjects);
