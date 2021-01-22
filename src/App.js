import React, { Component } from 'react';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from '../src/client-side-data/redux-store/store';
// Routing
import FrontEndRoutes from './components/common/react-router/routes/FrontEndRoutes';
// Authentication - allow auth users into app
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
