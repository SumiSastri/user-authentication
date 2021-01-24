import React, { Component } from 'react';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from '../src/client-side-data/redux-store/store';
// Routing
import FrontEndRoutes from './components/common/react-router/routes/FrontEndRoutes';
// Authentication - runs constantly on component mounting
// used in pages to identify private/auth pages vs public routes
import { loadAuthUser } from '../src/components/users/auth-user-actions/AuthUserActions';

class App extends Component {
	componentDidMount() {
		store.dispatch(loadAuthUser);
	}
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<FrontEndRoutes />
				</div>
			</Provider>
		);
	}
}
export default App;
