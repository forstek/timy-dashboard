import React, { Component } from 'react';
import logo from 'assets/images/timy-logo.png';
import Input from 'components/Input';

class Register extends Component {
	render() {
		return (
			<div className="centered">
				<img src={logo} alt="timy-logo" />
				<div className="logo-tagline">Remote working<br/>time tracker</div>
				<Input 
					placeholder="Email"
				/>
				<Input 
					placeholder="Name"
				/>
				<Input 
					placeholder="Password"
				/>
				<Input 
					placeholder="Confirm password"
				/>
			</div>
		);
	}
}

export default Register;