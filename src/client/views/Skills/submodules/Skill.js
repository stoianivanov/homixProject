import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "semantic-ui-react";

import { receiveUser } from "../../../store/actions/user";
const mapStateToProps = state => ({
  user: state.general.user,
  loggedUser: state.auth.loggedUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(receiveUser(user))
});

class Skill extends Component {
  render() {
    const { skill } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Header>{skill.name}</Card.Header>
          <Card.Meta>Level: {skill.level}</Card.Meta>
          <Card.Description>{skill.description}</Card.Description>
          <Button
            basic
            color="red"
            style={{ marginTop: "1em" }}
            onClick={() => {
              const obj = { ...this.props.user };
              const data = {
                userId: this.props.user._id,
                skills: obj.skills.filter(elem => elem.name != skill.name)
              };

              obj.skills = obj.skills.filter(elem => elem.name != skill.name);
              fetch("http://localhost:3000/user/skills", {
                method: "put",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              }).then(() => {
                this.props.fetchUser(obj);
              });
            }}
          >
            Delete
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
