import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import history from './history';
import HomePage from '../../HomePage';
import NavBar from '../navs/NavBar';
import CarPolicyPage from '../../../policies/policy-containers-components/car-policy-pages/CarPolicyPage';
import AuthLoginForm from '../../../users/auth-user-containers-components/AuthLoginForm';

export class FrontEndRoutes extends Component {
	render() {
		return (
			<div>
				<Router history={history}>
					<div>
						<NavBar />
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/car-policy" component={CarPolicyPage} />
							<Route path="/login" component={AuthLoginForm} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	users: state.users,
	carPolicy: state.carPolicy
});
export default connect(mapStateToProps, null)(FrontEndRoutes);
