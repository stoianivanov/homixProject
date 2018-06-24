import React, { Component } from "react";
import { Card, Image, Label, Button } from "semantic-ui-react";
import { addDev } from "../../../store/actions/team";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  addDeveloper: developer => dispatch(addDev(developer))
});

class Developer extends Component {
  render() {
    const { developer, addDeveloper } = this.props;
    return (
      <Card>
        <Image src={developer.profilePicture} />
        <Card.Content>
          <Card.Header>
            {developer.firstName} {developer.lastName}
          </Card.Header>
          <Card.Meta>
            <span className="date">Joined in {developer.startDate}</span>
          </Card.Meta>
          <Card.Description>
            {developer.position}
            Skills:
            {developer.skills.map(skill => <Label horizontal>{skill}</Label>)}
          </Card.Description>
          <Card.Content extra>
            <Button basic color="green" onClick={() => addDeveloper(developer)}>
              Approve
            </Button>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Developer);
