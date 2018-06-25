import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Table, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  personalinformation: state.personal.personalInformation
});

const PersonalInfomation = ({ personalinformation }) => (
  <Table basic="very" celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>INFO</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Icon name="user" />
            <Header.Content>Native Name</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{personalinformation.nativeName}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Icon name="heterosexual" />
            <Header.Content>Gender</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{personalinformation.gender}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Icon name="birthday" />
            <Header.Content>Birthday</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{personalinformation.birthday}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Icon name="id card" />
            <Header.Content>Governmental Id</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{personalinformation.govermentalid}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Icon name="drivers license" />
            <Header.Content>Driver License / EXP</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{personalinformation.driverLicense}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Icon name="user" />
            <Header.Content>T-shirt size</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{personalinformation.tShtirtSize}</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Icon name="laptop" />
            <Header.Content>Remote Work Possibility</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{personalinformation.remoteWork}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default connect(mapStateToProps)(PersonalInfomation);
