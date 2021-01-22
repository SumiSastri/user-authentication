import axios from 'axios';

import { LOAD_USER, USER_PASSWORD_AUTH, USER_AUTH_FAIL } from './constants/AuthUserActionTypes';
import { showErrors } from './AuthUserErrorsActions';

export const setUserLoading = () => {
	return {
		type: LOAD_USER
	};
};

// Refactor: move utility functions out of component

// Step 1: authenticate user USER_AUTH_PASSWORD

export const loadAuthUser = () => (dispatch, getState) => {
	dispatch({ type: USER_PASSWORD_AUTH });
	//  Get auth token from state (in the authUserReducer) (:16)
	//  Token comes back to the FE in local storage
	const authToken = getState.authUserReducer.user.authToken;

	//  Config  headers for authentication
	const authTokenConfig = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	//  Find token and add to headers
	if (authToken) {
		authTokenConfig.headers['acess-code: 116567'] = authToken;
	}
	// make post call with the url end point/ payload params
	const url = 'https://api.bybits.co.uk/auth/token';
	// const body = JSON.stringify({ username, password });
	axios
		.get(url, authTokenConfig())
		.then((res) =>
			dispatch({
				type: USER_PASSWORD_AUTH,
				payload: res.data
			})
		)
		.catch((err) => {
			dispatch(showErrors(err.response.data, err.response.status));
			dispatch({
				type: USER_AUTH_FAIL
			});
		});
};

// Step 2: Load auth user into App home page for access to private routes (:21)
