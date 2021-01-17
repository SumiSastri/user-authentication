import './App.css';
import AuthLoginForm from './components/users/AuthLoginForm';

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
		</div>
	);
}

export default App;
