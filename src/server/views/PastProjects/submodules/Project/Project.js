import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  pastProjects: state.pastProjects.pastProjects
});

const Project = ({ pastProjects }) => (
  <div>
    {pastProjects.map(project => (
      <Table style={{ margin: "0em 1em", width: "70%" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{project.name}</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Duration</Table.Cell>
            <Table.Cell>{project.duration}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Project Roles</Table.Cell>
            <Table.Cell>{project.projectRoles}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Customer</Table.Cell>
            <Table.Cell>{project.customer}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Project description</Table.Cell>
            <Table.Cell>{project.projectDescription}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Participation</Table.Cell>
            <Table.Cell>{project.participation}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Team</Table.Cell>
            <Table.Cell>{project.team}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tools and technologies</Table.Cell>
            <Table.Cell>{project.toolsAndTechnologies}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ))}
  </div>
);

export default connect(mapStateToProps)(Project);
