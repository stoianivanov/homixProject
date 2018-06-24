import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import CustomHeader from "../Header/Header";
import {receiveTeam} from '../../store/actions/team';
import { connect } from 'react-redux';
import { Card, Feed, Header, Loader, Button } from 'semantic-ui-react';

import TeamMember from './submodules/TeamMember'


const mapStateToProps = state => ({
  teams: state.teams.teams
});

const mapDispatchToProps = dispatch => ({
  fetchTeam: (teams) => dispatch(receiveTeam(teams))
});



class Teams extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loadingTeams: false,
		}
	}
  componentWillMount() {
		console.log("DEBUG MASTER");
		this.setState({ loadingTeams: true });
		fetch('http://localhost:3000/teams')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({ loadingTeams: false });
				this.props.fetchTeam(data);
			})
			.catch(error => {
				console.log(error);
			});
	}
  render() {
		if(this.state.loadingTeams) {
			return <Loader />
		}

		

    return (

      <div>
              <Fragment>
							<CustomHeader activeItem={'teams'}/>
							
							
							{this.props.teams.map( team => (
								<Fragment>
								<Header size='medium'>{team.name}</Header>
								<Card.Group style={{
									    padding: "10px"
								}}>
									{team.members.map(member => <TeamMember member={member}/>)}
								</Card.Group>
								<Button
									positive
									style={{ margin: "1em 0em" }}>
									Add
								</Button>
								</Fragment>
							)
							)}
							</Fragment>

        </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Teams); 
