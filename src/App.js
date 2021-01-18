import './App.css';

import AuthLoginForm from './components/users/AuthLoginForm';
import CarPolicyPage from './components/policies/CarPolicyPage';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<a
					className="App-link"
					href="https://github.com/SumiSastri/user-authentication"
					target="_blank"
					rel="noopener noreferrer"
				>
					User Authentication - GitHub Repo
				</a>
			</header>
			<AuthLoginForm />
			<CarPolicyPage />
		</div>
	);
}

export default App;
