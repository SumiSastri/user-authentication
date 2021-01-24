import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import history from './history';
import HomePage from '../../HomePage';
import NavBar from '../navs/NavBar';
import CarPolicyPage from '../../../../components/policies/policy-containers-components/car-policy-pages/CarPolicyPage';
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
							<Route
								path="/login"
								render={() => (
									<div>
										<AuthLoginForm />
									</div>
								)}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default FrontEndRoutes;
