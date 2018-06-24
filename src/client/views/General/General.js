import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Header from '../Header/Header';
import Submodules from './submodules/';
import styles from './General.css';
import { receiveUser } from '../../store/actions/user';

const mapStateToProps = state => ({
  user: state.general.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(receiveUser(user))
});

class General extends Component {
	componentDidMount() {
		// this.setState({ loadingPastProjects: true });
		fetch('http://localhost:3000/user/ivanka_ivanova@abv.bg')
			.then(response => response.json())
			.then(data => {
				// this.setState({ loadingPastProjects: false });
				this.props.fetchUser(data[0]);
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<Fragment>
				<Header activeItem={'general'} />
				<div className={styles.wrapper}>
					<div className={styles.flex}>
						<Submodules.InfoCard />
						<Submodules.Primary />
					</div>
					<Submodules.ProjectRole />
				</div>
			</Fragment>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(General);
