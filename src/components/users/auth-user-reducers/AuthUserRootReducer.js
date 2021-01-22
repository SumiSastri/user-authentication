import { combineReducers } from 'redux';
import authUserReducers from './AuthUserReducers';
import authuserErrorsReducers from './AuthUserErrorsReducers';

export default combineReducers({
	users: authUserReducers,
	errors: authuserErrorsReducers
});
