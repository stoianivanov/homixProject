import React from "react";
import ReactDOM from "react-dom";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  courses: state.courses.courses
});

const CourseCard = ({ courses }) => (
  <Card.Group>
    {courses.map(course => (
      <Card>
        <Card.Content>
          <Card.Header>{course.name}</Card.Header>
          <Card.Meta>{course.organization}</Card.Meta>
          <Card.Description>{course.description}</Card.Description>
          <Card.Description>peshooo</Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default connect(mapStateToProps)(CourseCard);
