import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCarPolicyItems } from '../../policy-actions/car-policy-actions/CarPolicyActions';

class CarPolicyPage extends Component {
	state = {
		loading: false,
		carPolicyReference: null,
		carPolicyCoverType: null,
		carPolicyHolderAddress: null,
		carPolicyCarMakeModel: null
	};
	render() {
		return (
			<div>
				<br />
				<h3 id="h3-authuser">My Policy</h3>
				<br />
				<input name="pol-ref" type="text" id="pol-ref" placeholder="Policy Ref" label="Policy Reference" />
				<br />
				<input name="cov-type" type="text" id="cov-type" placeholder="Cover Type" label="Cover Type" />
				<br />
				<input name="make-model" type="text" id="make-model" placeholder="Car make and model" label="Car" />
				<br />
				<input name="address" type="text" id="address" placeholder="Address" label="Address" />
				<br />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	carPolicy: state.carPolicy
});
export default connect(mapStateToProps, { getCarPolicyItems })(CarPolicyPage);
// export default CarPolicyPage;
