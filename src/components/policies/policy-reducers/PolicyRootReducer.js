import { combineReducers } from 'redux';

import carPolicyReducers from '../policy-reducers/car-policy-reducers/CarPolicyReducers';

export default combineReducers({
	carPolicy: carPolicyReducers
});
