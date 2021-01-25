import { GET_ERRORS, CLEAR_ERRORS } from './constants/AuthUserActionTypes';

export const showErrors = (msg, status, id) => {
	return {
		type: GET_ERRORS,
		payload: { msg, status, id }
	};
};
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
