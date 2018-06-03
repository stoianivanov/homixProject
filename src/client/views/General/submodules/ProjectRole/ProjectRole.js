import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

const mapStateToProps = state => ({
  projectRoles: state.general.projectRoles
});

const ProjectRole = ({ projectRoles }) => (
  <Card.Group>
    <div style={{ display: "flex", flexDirection: "row" }}>
      {projectRoles.map((projectRole, key) => (
        <div key={key} style={{margin: "1em", marginLeft: "0.5em"}}>
          <Card >
            <Card.Content>
              <Card.Header>{projectRole.header}</Card.Header>
              <Card.Meta>{projectRole.meta}</Card.Meta>
              <Card.Description>{projectRole.description}</Card.Description>
            </Card.Content>
          </Card>
        </div>
      ))}
    </div>
  </Card.Group>
);

export default connect(mapStateToProps)(ProjectRole);
