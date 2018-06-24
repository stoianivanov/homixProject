import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Input, Card, Image, Button, Label } from "semantic-ui-react";

import Header from "../Header/Header";

const mapStateToProps = state => ({
  developers: state.dev.developers
});

class DevelopersSearch extends Component {
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

  search(e, { value }) {
    this.setState({ isLoading: true, searchedValue: value });
    const filteredDevelopers = this.state.developers.filter(developer =>
      developer.skills.filter(skill => skill.indexOf(value))
    );

    this.setState({ developers: filteredDevelopers, isLoading: false });
  }

  handleSearchChange(e, { value }) {
    this.setState({ searchedValue: value });
  }

  render() {
    return (
      <Fragment>
        <Header activeItem={"developers"} />
        <div>
          <Input
            action={{ icon: "search" }}
            placeholder="Search..."
            onChange={this.handleSearchChange}
            value={this.state.searchedValue}
          />
          {this.state.developers.map(developer => (
            <Card>
              <Image src={developer.profilePicture} />
              <Card.Content>
                <Card.Header>
                  {developer.firstName} {developer.lastName}
                </Card.Header>
                <Card.Meta>
                  <span className="date">Joined in {developer.startDate}</span>
                </Card.Meta>
                <Card.Description>
                  {developer.position}
                  Skills:
                  <Label color="red" horizontal>
                    Java
                  </Label>
                  <Label color="red" horizontal>
                    JavaScript
                  </Label>
                  <Label color="red" horizontal>
                    SQL
                  </Label>
                  <Label color="red" horizontal>
                    Lorem
                  </Label>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button basic color="green">
                  Approve
                </Button>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(DevelopersSearch);
