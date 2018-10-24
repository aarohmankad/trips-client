import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

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
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

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
            <div className="Sign-In">
                {/* Sign In & Sign Up Buttons */}
                <div className="PageSwitcher">
                    <NavLink
                        to="/sign-in"
                        activeClassName="PageSwitcher_Item-Active"
                        className="PageSwitcher_Item"
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        exact
                        to="/sign-up"
                        activeClassName="PageSwitcher_Item-Active"
                        className="PageSwitcher_Item"
                    >
                        Sign Up
                    </NavLink>
                </div>

                {/* Sign In & Sign Up Links */}
                <div className="FormTitle">
                    <NavLink
                        to="/sign-in"
                        activeClassName="FormTitle_Link-Active"
                        className="FormTitle_Link"
                    >
                        Sign In
                    </NavLink>{' '}
                    or
                    <NavLink
                        exact
                        to="/sign-up"
                        activeClassName="FormTitle_Link-Active"
                        className="FormTitle_Link"
                    >
                        Sign Up
                    </NavLink>
                </div>

                <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                        {/* Email Address */}
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="FormField_Input FormField_SignIn"
                                placeholder="Enter your email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="FormField">
                            <label
                                className="FormField_Label"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="FormField_Input FormField_SignIn"
                                placeholder="Enter your password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                required
                                title="Must contain at least one uppercase and lowercase letter, one number, and contain 6 or more characters"
                            />
                        </div>

                        {/* Submission Button */}
                        <div className="FormField">
                            <button className="FormField_Button mr-20">
                                Sign In
                            </button>{' '}
                            <Link to="/sign-up" className="FormField_Link">
                                Create an account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInForm;
