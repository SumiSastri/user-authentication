import { combineReducers } from 'redux';
import authUserReducers from './AuthUserReducers';

export default combineReducers({
	users: authUserReducers
});
