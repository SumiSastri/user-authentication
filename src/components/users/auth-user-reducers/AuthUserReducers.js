// lift state out of component to reducer
import { LOAD_USER } from '../auth-user-actions/AuthUserActionTypes';

const initialState = {
	users: {
		username: null,
		isAuthenticated: null,
		loading: false
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_USER:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
