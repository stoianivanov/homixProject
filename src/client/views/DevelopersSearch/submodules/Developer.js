import React, { Component } from "react";
import { Card, Image, Label, Button } from "semantic-ui-react";
import { addDev } from "../../../store/actions/team";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  selectedTeamId: state.teams.selectedTeamId
});

const mapDispatchToProps = dispatch => ({
  addDeveloper: developer => dispatch(addDev(developer))
});

class Developer extends Component {
  render() {
    const { developer, addDeveloper, updateParent } = this.props;
    return (
      <Card>
        <Image src={developer.profilePicture} />
        <Card.Content>
          <Card.Header>{developer.name}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in {developer.startDate}</span>
          </Card.Meta>
          <Card.Description>
            {developer.position}
            Skills:
            {developer.skills.map(skill => (
              <Label horizontal>{skill.name}</Label>
            ))}
          </Card.Description>
          <Card.Content extra>
            <Button
              basic
              color="green"
              onClick={() => {
                const data = {
                  teamId: this.props.selectedTeamId,
                  developerId: developer._id
                };
                console.log(data);
                fetch("http://localhost:3000/addNewMember", {
                  method: "post",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
                }).then(() => {
                  addDeveloper(developer);
                  updateParent();
                });
              }}
            >
              Approve
            </Button>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Developer);
