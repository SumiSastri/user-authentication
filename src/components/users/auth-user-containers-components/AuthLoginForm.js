import React, { Component } from 'react';
// import { connect } from 'react-redux';

// move state and actions out of class component
// import { login } from '../auth-user-actions/AuthUserActions';

export default class AuthLoginForm extends Component {
	// refactor to state as props of class component?
	// handleChange = (stateKey) => (event) => {
	// 	this.setState({ [stateKey]: event.target.value });
	// };

	// refactor to import action-creator as submit payload function
	// handlesubmit = (event) => {
	// event.preventDefault()
	// };

	render() {
		const { username, password } = this.props.users;
		console.log(`logs login props`, this.props.users);
		return (
			<form onSubmit={this.submitForm}>
				<h3 id="h3-authuser">Sign In</h3>
				<label>User Name</label>
				<input
					name="username"
					type="text"
					id="authuserlogin"
					placeholder="Test User"
					label="User Name"
					value={username}
					onChange={this.handleChange('username')}
				/>
				<p>{username}</p>
				<br />
				<label>Password</label>
				<input
					className="input"
					name="User Password"
					type="Password"
					id="authuserpassword"
					placeholder="Password"
					label="Password"
					value={password}
					onChange={this.handleChange('password')}
				/>
				<p>{password}</p>
				<br />
				<button
					name="btn-submit"
					type="btn"
					id="btn-authuserpayload"
					label="Sign-in"
					onSubmit={this.submitForm}
				>
					Sign-in
				</button>
			</form>
		);
	}
}

// state of this component now a prop so
// mapped as a prop to the reducer via the action type & payload
// string constant and the function evaluated and connected in reducer

// const mapStateToProps = (state) => ({
// 	users: state.users
// isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, {login })(AuthLoginForm);
