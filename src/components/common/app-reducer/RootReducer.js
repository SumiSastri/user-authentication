import { combineReducers } from 'redux';
import AuthUserRootReducer from '../../users/auth-user-reducers/AuthUserRootReducer';

export default combineReducers({
	users: AuthUserRootReducer
});
