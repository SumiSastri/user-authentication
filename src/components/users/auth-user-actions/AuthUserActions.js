import axios from 'axios';

import {
	LOAD_USER,
	USER_PASSWORD_AUTH,
	USER_PASSWORD_AUTH_FAIL,
	LOAD_AUTH_USER,
	LOAD_AUTH_USER_FAIL
} from './constants/AuthUserActionTypes';
import { showErrors } from './AuthUserErrorsActions';

// test to set up redux store
export const setUserLoading = () => {
	return {
		type: LOAD_USER
	};
};

// Refactor: move utility functions out of component
// Step 1: authenticate user USER_AUTH_PASSWORD
// 1.1 get localstorage token from state (in the authUserReducer)
// 1.2 configure headers (:25) Authorization: Bearer {access_token}
// this utility function now can be imported to pages requiring auth token
export const authTokenConfig = (getState) => {
	const authorization = getState().authUserReducer.user.authorization;
	const config = {
		headers: {
			'Content-Type': 'application/json',
			environment: 'mock',
			Authorization: 'Bearer MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs'
		}
	};
	//  Find token and add to headers with the config method
	if (authorization) {
		config.headers[116567] = authorization;
	}
	return authTokenConfig;
};

// Step 2: Make get call with the url end point
// 2.1 get the token and 2.2 load user with the auth token
// utility function identifies private vs public access
// it checks the token from state with getState method
// Authorization: Bearer {access_token} add token to get header
export const loadAuthUser = () => (dispatch, getState) => {
	// first load user, then get token update load user with the
	// authenticated user loaded - user + token in payload
	dispatch({ type: LOAD_USER });
	const url = 'https://api.bybits.co.uk/policys/details';
	axios
		.get(url, authTokenConfig(getState))
		.then((res) =>
			dispatch({
				type: LOAD_AUTH_USER,
				payload: res.data
			})
		)
		.catch((err) => {
			// call the showErrors function here
			dispatch(showErrors(err.response.data, err.response.status, 'USER_AUTH_FAIL'));
			dispatch({
				type: LOAD_AUTH_USER_FAIL
			});
		});
};
// Step 3: Load auth user into App home page - for control of auth pages
// this utility function now used to identify private routes

// Step 4: create login utility function with a post call
//  4.1 config headers 4.2 change body into a string
//  4.3 make post call for login - check success fail
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
				type: USER_PASSWORD_AUTH_FAIL
			});
		});
};
