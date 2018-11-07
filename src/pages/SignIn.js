import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

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
		const { target } = e;
		const { name, value } = target;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		// FIXME: Strictly for demo purposes
		request
			.post('http://localhost:8000/api/login')
			.send(this.state)
			.then(response => {
				localStorage.setItem('trips-user', JSON.stringify(response.body.token));
				this.props.history.push('/search');
			});
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
							autoComplete="email"
							fullWidth
						/>

						<TextField
							id="outlined-name"
							className="sign-in-formfield"
							label="Password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
							type="password"
							fullWidth
						/>
					</form>
					<Button
						variant="contained"
						color="primary"
						size="large"
						onClick={this.handleSubmit}
						className="sign-in-submit-button"
					>
						Sign In
					</Button>

					<p>
						Don't have an account? <Link to="/signup">Register!</Link>
					</p>
				</Paper>
			</div>
		);
	}
}

export default SignInForm;
