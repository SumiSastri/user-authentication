// lift state out of component to reducer
import { LOAD_AUTH_USER } from '../auth-user-actions/AuthUserActionTypes';

const initialState = {
	user= null,
	token: localStorage.getUserPolicy('token'),
	isAuthenticated: null,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_AUTH_USER:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
}
