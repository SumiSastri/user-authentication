import './App.css';
// Redux Provider HoC shares state of the store across all components as a prop
import { Provider } from 'react-redux';
import store from '../src/client-side-data/redux-store/store';

import FrontEndRoutes from './components/common/react-router/routes/FrontEndRoutes';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<FrontEndRoutes />
			</div>
		</Provider>
	);
}

export default App;
