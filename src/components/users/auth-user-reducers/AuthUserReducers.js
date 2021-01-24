// lift state out of component to reducer
import {
	LOAD_USER,
	LOAD_AUTH_USER,
	USER_PASSWORD_AUTH,
	USER_PASSWORD_AUTH_FAIL
} from '../auth-user-actions/constants/AuthUserActionTypes';

// Authorization: Bearer {access_token}
const initialState = {
	users: {
		username: null,
		isAuthenticated: false,
		loading: false,
		authToken: localStorage.getItem('authToken')
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
		// this runs continuously validating auth login
		case LOAD_AUTH_USER:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload
			};

		case USER_PASSWORD_AUTH:
			localStorage.setItem('authToken', action.payload.token);
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload
			};
		case USER_PASSWORD_AUTH_FAIL:
			localStorage.removeItem('authToken');
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				authToken: null,
				user: null
			};
		default:
			return state;
	}
}
