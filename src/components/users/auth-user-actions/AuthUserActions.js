// import axios from 'axios';

// import { USER_PASSWORD_AUTH, LOAD_AUTH_USER, AUTH_FAIL } from './AuthUserActionTypes';

import { LOAD_USER } from './AuthUserActionTypes';

export const setUserLoading = () => {
	return {
		type: LOAD_USER
	};
};

// // refactor change handler - json stringify response body
// // handleChange = (stateKey) => (event) => {
// // 	this.setState({ [stateKey]: event.target.value });
// // };

// //  Check token & load user
// export const loadUser = () => (dispatch, getState) => {
// 	// User loading
// 	dispatch({ type: LOAD_AUTH_USER });
// 	const url = 'https://api.bybits.co.uk/auth/token';
// 	axios
// 		.get(url, tokenConfig(getState))
// 		.then((res) =>
// 			dispatch({
// 				type: LOAD_AUTH_USER,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) => {
// 			dispatch(returnErrors(err.response.data, err.response.status));
// 			dispatch({
// 				type: AUTH_FAIL
// 			});
// 		});
// };

// // refactor to an action-creator USER_AUTH_PASSWORD
// // Login User
// export const login = ({ username, password }) => (dispatch) => {
// 	// Headers
// 	const config = {
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	};

// 	// Request body
// 	const body = JSON.stringify({ username, password });
// 	const url = 'https://api.bybits.co.uk/auth/token';
// 	axios
// 		.post(url, body, config)
// 		.then((res) =>
// 			dispatch({
// 				type: USER_PASSWORD_AUTH,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) => {
// 			dispatch(returnErrors(err.response.data, err.response.status, 'USER_LOGIN_FAIL'));
// 			dispatch({
// 				type: AUTH_FAIL
// 			});
// 		});
// };
