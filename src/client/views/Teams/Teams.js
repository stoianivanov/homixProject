import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import { receiveTeam } from "../../store/actions/team";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";
import Team from "./submodules/Team";

const mapStateToProps = state => ({
  teams: state.teams.teams
});

const mapDispatchToProps = dispatch => ({
  fetchTeam: teams => dispatch(receiveTeam(teams))
});

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingTeams: false
    };
  }

  componentWillMount() {
    this.setState({ loadingTeams: true });
    fetch("http://localhost:3000/teams")
      .then(response => response.json())
      .then(data => {
        this.setState({ loadingTeams: false });
        this.props.fetchTeam(data);
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
      <div>
        <Fragment>
          <Header activeItem={"teams"} />
          <div style={{ padding: "1em" }}>
            {this.props.teams.map(team => <Team team={team} />)}
          </div>
        </Fragment>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
