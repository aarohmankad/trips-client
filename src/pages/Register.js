import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import request from 'superagent';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
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
      .post('http://localhost:8000/api/users')
      .send({
        ...this.state,
        name: `${this.state.firstname} ${this.state.lastname}`,
      })
      .then(response => {
        localStorage.setItem('trips-user', JSON.stringify(response.body.token));
        this.props.history.push('/search');
      });
  }

  render() {
    return (
      <div className="register-page">
        <Paper className="register-paper">
          <h1>Register</h1>
          <form>
            <TextField
              className="register-formfield"
              label="First Name"
              value={this.state.firstname}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="firstname"
              fullWidth
            />

            <TextField
              className="register-formfield"
              label="Last Name"
              value={this.state.lastname}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="lastname"
              fullWidth
            />

            <TextField
              className="register-formfield"
              label="Username"
              value={this.state.username}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              name="username"
              fullWidth
            />

            <TextField
              className="register-formfield"
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
              className="register-formfield"
              label="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
              type="password"
              fullWidth
            />

            <TextField
              className="register-formfield"
              label="Confirm Password"
              name="confirmPassword"
              value={this.state.confirmPassword}
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
            className="register-submit-button"
            disabled={this.state.password !== this.state.confirmPassword}
          >
            Sign Up
          </Button>

          <p>
            Already have an account? <Link to="/signin">Log In!</Link>
          </p>
        </Paper>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
