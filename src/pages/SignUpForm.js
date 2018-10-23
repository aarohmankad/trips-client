import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="Sign-Up">
                {/* Sign In & Sign Up Buttons */}
                <div className="PageSwitcher">
                    <NavLink to="/sign-in" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign In</NavLink>
                    <NavLink exact to="/sign-up" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign Up</NavLink>
                </div>

                {/* Sign In & Sign Up Links */}
                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle_Link-Active" className="FormTitle_Link">Sign In</NavLink> or 
                    <NavLink exact to="/sign-up" activeClassName="FormTitle_Link-Active" className="FormTitle_Link">Sign Up</NavLink>
                </div>

                <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                        {/* First Name Field */}
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" id="firstname" className="FormField_Input" placeholder="Enter your first name" value={this.state.firstname} onChange={this.handleChange} required/>
                        </div>
                        
                        {/* Last Name Field */}
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" id="lastname" className="FormField_Input" placeholder="Enter your last name" value={this.state.lastname} onChange={this.handleChange} required/>
                        </div>
  
                        {/* Email Field */}
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" className="FormField_Input" placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} required/>
                        </div>

                        {/* Password Field */}
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="FormField_Input" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange}pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" required title="Must contain at least one uppercase and lowercase letter, one number, and contain 6 or more characters"/>
                        </div>

                        {/* Checkbox */}
                        <div className="FormField">
                            <label className="FormField_CheckboxLabel">
                                <input className="FormField_Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} required/> I have read and agree to all statements in the <a href="0" className="FormField_TermsLink">terms of service.</a>
                            </label>
                        </div>

                        {/* Submission Button */}
                        <div className="FormField">
                            <button className="FormField_Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField_Link">I'm already a member</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUpForm;