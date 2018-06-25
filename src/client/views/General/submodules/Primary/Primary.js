import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

const mapStateToProps = state => ({
  characteristics: state.general.characteristics
});

const Primary = ({ characteristics }) => (
  <Table style={{ width: "70%", margin: "0em 1em" }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Primary</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Status</Table.Cell>
        <Table.Cell>{characteristics.status}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Job</Table.Cell>
        <Table.Cell>{characteristics.job}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Job Level</Table.Cell>
        <Table.Cell>{characteristics.level}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Key Skill</Table.Cell>
        <Table.Cell>{characteristics.keySkill}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Primary Skill</Table.Cell>
        <Table.Cell>{characteristics.skill}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Languages</Table.Cell>
        <Table.Cell>{characteristics.lang}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Mentor</Table.Cell>
        <Table.Cell>{characteristics.mentor}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default connect(mapStateToProps)(Primary);
