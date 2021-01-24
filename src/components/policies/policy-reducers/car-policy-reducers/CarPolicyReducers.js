// lift state out of component to reducer
import { LOAD_CAR_POLICY_ITEMS } from '../../policy-actions/policy-constants/CarPolicyActionTypes';

// Authorization: Bearer {access_token}
const initialState = {
	carPolicy: {
		loading: false,
		isAuthenticated: true,
		policy_ref: '123',
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

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_CAR_POLICY_ITEMS:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
