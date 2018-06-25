import React, { Component, Fragment } from "react";
import TeamMember from "./TeamMember";
import { Card, Feed, Header, Loader, Button } from "semantic-ui-react";
import Developers from "../../DevelopersSearch/submodules/Developers";
import { selectTeam } from "../../../store/actions/team";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  changeSelectedTeam: team => dispatch(selectTeam(team))
});

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false
    };
  }

  render() {
    const { team } = this.props;
    return (
      <Fragment>
        <Header size="medium">{team.name}</Header>
        <Card.Group
          style={{
            padding: "10px"
          }}
        >
          {team.members.map(member => <TeamMember member={member} />)}
        </Card.Group>
        <Button
          positive
          style={{ margin: "1em 0em" }}
          onClick={() => {
            this.setState({ showSearch: !this.state.showSearch });
            this.props.changeSelectedTeam(team);
          }}
        >
          Add
        </Button>
        {this.state.showSearch && (
          <Developers
            devs="freelancers"
            updateParent={() => {
              this.setState({ showSearch: false });
            }}
          />
        )}
      </Fragment>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Team);
