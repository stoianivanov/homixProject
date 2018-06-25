import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Card, Image, Icon } from "semantic-ui-react";

import styles from "./InfoCard.css";

const mapStateToProps = state => ({
  user: state.general.user
});

const InfoCard = ({ user }) => (
  <Card>
    <Image src={user.profilePicture} style={{ height: "248px" }} />
    <Card.Content>
      <Card.Header>{user.name}</Card.Header>
      <Card.Meta>Joined in {user.startDate}</Card.Meta>
      <Card.Description>{user.type}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div>
        <Icon name="mail outline" />
        {user.email}
      </div>
      <div>
        <Icon name="phone" />
        {user.phone}
      </div>
    </Card.Content>
  </Card>
);

export default connect(mapStateToProps)(InfoCard);
