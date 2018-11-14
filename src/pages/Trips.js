import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import jwt from 'jsonwebtoken';
import React, { Component } from 'react';
import request from 'superagent';

import JSONWEBTOKEN from '../config/JSONWEBTOKEN';

class TripsUserInterface extends Component {
	constructor() {
		super();

		this.state = {
			location: '',
			StartDate: '',
			EndDate: '',
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

		const user = jwt.decode(
			localStorage.getItem('trips-user'),
			JSONWEBTOKEN.secret
		);
		const payload = {
			...this.state,
			createdBy: user.user._id,
		};

		// FIXME: Strictly for demo purposes
		request
			.post('http://localhost:8000/api/trips')
			.send(payload)
			.then(response => {
				this.props.history.push('/search');
			});
	}

	render() {
		return (
			<div className="trips-page">
				<Paper className="trips-paper">
					<h1>Create a Trip</h1>
					<form className="trips-form" noValidate>
						<TextField
							className="trips-formfield"
							label="Location"
							value={this.state.location}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
							name="location"
							fullWidth
						/>
						<TextField
							className="trips-datetime"
							label="Start Date"
							onChange={this.handleChange}
							type="date"
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							className="trips-datetime"
							label="End Date"
							onChange={this.handleChange}
							type="date"
							InputLabelProps={{ shrink: true }}
						/>
					</form>
					<Button
						variant="contained"
						color="primary"
						size="large"
						onClick={this.handleSubmit}
						className="trips-submit-button"
					>
						Create Trip
					</Button>
				</Paper>
			</div>
		);
	}
}

export default TripsUserInterface;
