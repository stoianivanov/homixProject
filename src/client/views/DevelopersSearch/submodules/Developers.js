import React, { Component } from "react";
import { Input, Button, Card } from "semantic-ui-react";
import Developer from "./Developer";
import { connect } from "react-redux";
import { receiveFreeDevs } from "../../../store/actions/team";

const mapStateToProps = state => ({
  developers: state.teams.freeDevs
});

const mapDispatchToProps = dispatch => ({
  receiveFreelancers: devs => dispatch(receiveFreeDevs(devs))
});

class Developers extends Component {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      developers: [],
      searchedValue: "",
      isLoading: false
    };
  }

  componentWillMount() {
    fetch("http://localhost:3000/freelancers")
      .then(response => response.json())
      .then(data => {
        this.props.receiveFreelancers(data);
        this.setState({ developers: data });
      });
  }

  search() {
    this.setState({ isLoading: true });
    const filteredDevelopers = this.props.developers.filter(developer => {
      const matchedSkills = developer.skills.filter(skill =>
        skill.name
          .toLowerCase()
          .includes(this.state.searchedValue.toLowerCase().trim())
      );
      return matchedSkills.length > 0;
    });

    this.setState({ developers: filteredDevelopers, isLoading: false });
  }

  handleSearchChange(e, { value }) {
    this.setState({ searchedValue: value });
  }

  render() {
    return (
      <div>
        <Input
          placeholder="Search..."
          onChange={this.handleSearchChange}
          value={this.state.searchedValue}
        />
        <Button onClick={this.search}>Search </Button>
        <Card.Group itemsPerRow={3}>
          {this.state.developers.map(developer => (
            <Developer
              developer={developer}
              updateParent={this.props.updateParent}
            />
          ))}
        </Card.Group>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Developers);
