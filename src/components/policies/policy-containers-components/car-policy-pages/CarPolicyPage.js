import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCarPolicyItems } from '../../policy-actions/car-policy-actions/CarPolicyActions';
// move state out into the reducer
// move utility functions to action creators
// import action creator back into component and connect to store
class CarPolicyPage extends Component {
	state = {
		carPolicy: {
			loading: false,
			isAuthenticated: true,
			policy_ref: '',
			cover: '',
			address: {
				line_1: ' ',
				line_2: ' ',
				line_3: ' ',
				county: ' ',
				city: ' ',
				country: ' ',
				postcode: ' '
			},
			vehicle: {
				make: ' ',
				model: ' '
			}
		}
	};
	handleChange = (stateKey) => (event) => {
		this.setState({ [stateKey]: event.target.value });
	};
	render() {
		const { policy_ref, cover, address, vehicle, isAuthenticated } = this.state;
		return (
			<div>
				<br />
				{isAuthenticated ? (
					<div>
						<h3 id="h3-authuser">My Policy</h3>
						<br />
						<input
							name="pol-ref"
							type="text"
							id="pol-ref"
							placeholder="Policy Ref"
							label="Policy Reference"
							value={policy_ref}
							onChange={this.handleChange('policy_ref')}
						>
							{policy_ref}
						</input>
						<br />
						<input
							name="cov-type"
							type="text"
							id="cov-type"
							placeholder="Cover Type"
							label="Cover Type"
							value={cover}
							onChange={this.handleChange('cover')}
						>
							{cover}
						</input>
						<br />
						<input
							name="make-model"
							type="text"
							id="make-model"
							placeholder="Car make and model"
							label="Car"
							value={vehicle}
							onChange={this.handleChange('vehicle')}
						>
							{vehicle}
						</input>
						<br />
						<input
							name="address"
							type="text"
							id="address"
							placeholder="Address"
							label="Address"
							value={address}
							onChange={this.handleChange('address')}
						>
							{address}
						</input>
						<br />
					</div>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	carPolicy: state.carPolicy
});
export default connect(mapStateToProps, { getCarPolicyItems })(CarPolicyPage);
// export default CarPolicyPage;
