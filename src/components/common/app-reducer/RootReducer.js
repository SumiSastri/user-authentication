import { combineReducers } from 'redux';
import AuthUserRootReducer from '../../users/auth-user-reducers/AuthUserRootReducer';
import PolicyRootReducer from '../../policies/policy-reducers/PolicyRootReducer';
export default combineReducers({
	AuthUserRootReducer: AuthUserRootReducer,
	PolicyRootReducer: PolicyRootReducer
});
