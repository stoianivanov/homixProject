import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import Developer from "./Developer";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  developers: state.dev.developers
});

class Developers extends Component {
  constructor(props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      developers: this.props.developers,
      searchedValue: "",
      isLoading: false
    };
  }

  search() {
    this.setState({ isLoading: true });
    const filteredDevelopers = this.props.developers.filter(developer => {
      const matchedSkills = developer.skills.filter(skill =>
        skill
          .toLowerCase()
          .includes(this.state.searchedValue.toLowerCase().trim())
      );
      return matchedSkills.length > 0;
    });
    console.log(filteredDevelopers);

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
        {this.state.developers.map(developer => (
          <Developer developer={developer} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Developers);
