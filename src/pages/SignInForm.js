import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';

class SignInForm extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, target } = e;
		let value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log('The form was submitted with the following data:');
		console.log(this.state);
	}

	render() {
		return (
			<div className="sign-in-page">
				<Paper className="sign-in-paper">
					<h1>Sign In</h1>

					<form>
						<TextField
							id="outlined-name"
							className="sign-in-formfield"
							label="Email"
							value={this.state.email}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
							type="email"
							name="email"
							autocomplete="email"
						/>

						<TextField
							id="outlined-name"
							className="sign-in-formfield"
							label="Password"
							value={this.state.password}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
							type="password"
						/>
					</form>

					<Button variant="contained" color="#00E676" size="large">
						Sign In
					</Button>
				</Paper>
			</div>
		);
	}
}

export default SignInForm;
