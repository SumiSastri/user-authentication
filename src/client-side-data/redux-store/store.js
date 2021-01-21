import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../../components/common/app-reducer/RootReducer';

const initialState = {};
const middleware = [ thunk ];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
console.log(`store working`, store);
// log for debug checks
store.subscribe(() => console.log(store.getState()));

export default store;
