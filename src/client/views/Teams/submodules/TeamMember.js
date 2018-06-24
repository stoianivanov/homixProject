import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

const TeamMembers = ({ member }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{member.name}</Card.Header>
        <Card.Meta>{member.type}</Card.Meta>
        <Card.Description>
          Use {member.skills.map(skill => <span>{skill} </span>)}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default TeamMembers;
