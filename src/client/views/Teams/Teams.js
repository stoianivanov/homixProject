import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../Header/Header";
import {receiveTeam} from '../../store/actions/team';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import { Card, Feed } from 'semantic-ui-react';

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
		this.setState({ loadingTeams: true });
		fetch('http://localhost:3000/teams')
			.then(response => response.json())
			.then(data => {
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
		const teams = this.props.teams.map( team =>
				(
					<Card>
			<Card.Content>
				<Card.Header>{team.name}</Card.Header>
			</Card.Content>
			<Card.Content>
			<Feed>
				{team.members.map(member => 
					(
						<Feed.Event>
						<Feed.Label image='/assets/images/avatar/small/jenny.jpg' />
						<Feed.Content>
							<Feed.Date content='1 day ago' />
							<Feed.Summary>
								{member.name} {member.position}
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>
					))}

				</Feed>
			</Card.Content>
			</Card>
		)
		
		);
    return (

      <div>
              <h1> TEST</h1>
							{this.props.teams.map(team => <h1>{team.name}</h1>)}
							{teams}
        </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Teams); 