import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../auth-user-actions/AuthUserActions';
import { clearErrors } from '../auth-user-actions/AuthUserErrorsActions';
import history from '../../common/react-router/routes/history';

class AuthLoginForm extends Component {
	state = {
		username: '',
		password: ''
	};
	componentDidUpdate(previousProps) {
		const { error } = this.props;
		if (error !== previousProps.error) {
			if (error.id === 'USER_AUTH_FAIL') {
				this.setState({ msg: error.msg.msg });
			} else {
				this.setState({ msg: null });
			}
		}
	}
	handleChange = (stateKey) => (event) => {
		this.setState({ [stateKey]: event.target.value });
	};
	submitForm = (event) => {
		event.preventDefault();
		const { username, password } = this.state;
		const user = {
			username,
			password
		};
		this.props.login(user);
		history.push('/car-policy');
	};
	render() {
		const { username, password } = this.state;
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
				{/*  */}
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
				{/* <p>{password}</p> */}
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
const mapStateToProps = (state) => ({
	users: state.users
});
export default connect(mapStateToProps, { login, clearErrors })(AuthLoginForm);
