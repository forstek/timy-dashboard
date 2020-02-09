import React, { Component } from 'react';
import logo from 'assets/images/timy-logo.png';
import Input from 'components/Input';

class Register extends Component {
	render() {
		return (
			<Input 
				placeholder="Email"
			/>
		);
	}
}

export default Register;