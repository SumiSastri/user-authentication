import axios from 'axios';

import { LOAD_CAR_POLICY_ITEMS, GET_CAR_POLICY_ITEMS } from '../policy-constants/CarPolicyActionTypes';
import { authTokenConfig } from '../../../users/auth-user-actions/AuthUserActions';
import { showErrors } from '../../../users/auth-user-actions/AuthUserErrorsActions';

export const getCarPolicyItems = () => (dispatch, getState) => {
	dispatch(setCarPolicyLoading());
	const url = 'https://api.bybits.co.uk/policys/details';
	axios
		.get(url, authTokenConfig(getState))
		.then((res) =>
			dispatch({
				type: GET_CAR_POLICY_ITEMS,
				payload: res.data
			})
		)
		.catch((err) => dispatch(showErrors(err.res.data, err.res.status)));
};
export const setCarPolicyLoading = () => {
	return {
		type: LOAD_CAR_POLICY_ITEMS
	};
};
