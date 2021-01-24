import axios from 'axios';

import { LOAD_CAR_POLICY_ITEMS, GET_CAR_POLICY_ITEMS } from '../policy-constants/CarPolicyActionTypes';

export const getCarPolicyItems = () => (dispatch) => {
	dispatch(setCarPolicyLoading());
	const url = 'https://api.bybits.co.uk/policys/details';
	axios.get(url).then((res) =>
		dispatch({
			type: GET_CAR_POLICY_ITEMS,
			payload: res.data
		})
	);
};

export const setCarPolicyLoading = () => {
	return {
		type: LOAD_CAR_POLICY_ITEMS
	};
};
