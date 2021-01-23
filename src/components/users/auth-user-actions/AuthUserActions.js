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
// 1.1 get localstorage token from state (in the authUserReducer)
// 1.2 configure headers
export const authTokenConfig = (getState) => {
	const authToken = getState().authUserReducer.user.authToken;
	const config = {
		headers: {
			'Content-Type': 'application/json',
			environment: 'mock'
		}
	};
	//  Find token and add to headers
	//  back end code Authorization: Bearer {access_token}
	if (authToken) {
		config.headers['116567'] = authToken;
	}
	return authTokenConfig;
};

// Step 2: Make get call with the url end point
// get the token back to match login-details and authorise user
// action type and action payload
export const loadAuthUser = () => (dispatch, getState) => {
	dispatch({ type: USER_PASSWORD_AUTH });
	const url = 'https://api.bybits.co.uk/policys/details';
	axios
		.get(url, authTokenConfig(getState))
		.then((res) =>
			dispatch({
				type: USER_PASSWORD_AUTH,
				payload: res.data
			})
		)
		.catch((err) => {
			// call the showErrors function here
			dispatch(showErrors(err.response.data, err.response.status, 'USER_AUTH_FAIL'));
			dispatch({
				type: USER_AUTH_FAIL
			});
		});
};
// Step 3: Load auth user into App home page for access to private routes (:25)

// Step 4: create login utility function with a post call
// This is sent to the auth reducer via the component props
// dispatched by the action to component which maps component state to props
export const login = ({ username, password }) => (dispatch) => {
	// Headers of post request
	const config = {
		headers: {
			'Content-Type': 'application/json',
			environment: 'mock'
		}
	};
	const body = JSON.stringify({ username, password });
	const url = 'https://api.bybits.co.uk/auth/token';
	axios
		.post(url, body, config)
		.then((res) =>
			dispatch({
				type: USER_PASSWORD_AUTH,
				payload: res.data
			})
		)
		.catch((err) => {
			dispatch(showErrors(err.response.data, err.response.status, 'USER_AUTH_FAIL'));
			dispatch({
				type: USER_AUTH_FAIL
			});
		});
};
