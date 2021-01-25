import {
	LOAD_CAR_POLICY_ITEMS,
	GET_CAR_POLICY_ITEMS
} from '../../policy-actions/policy-constants/CarPolicyActionTypes';

const initialState = {
	carPolicy: {
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
	},
	loading: false,
	isAuthenticated: true
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_CAR_POLICY_ITEMS:
			return {
				...state,
				carPolicy: action.payload,
				loading: false,
				isAuthenticated: true
			};
		case LOAD_CAR_POLICY_ITEMS:
			return {
				...state,

				loading: true
			};
		default:
			return state;
	}
}
