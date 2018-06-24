import React from "react";
import { connect } from "react-redux";
import { Card } from 'semantic-ui-react'


const teamMembers = ({member}) => {
    return (
        <Card>
        <Card.Content>
          <Card.Header>{member.name}</Card.Header>
          <Card.Meta>{member.position}</Card.Meta>
          <Card.Description>Use {member.lang}</Card.Description>
        </Card.Content>
      </Card>
    )
};

export default teamMembers;