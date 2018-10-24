import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmPW: '',
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

// onChange(e) {
//   this.handleChange(e);
//   this.checkPW(e);
// }

handleChange(e) {
  let target = e.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let name = target.name;

  this.setState({
    [name]: value
  });
}

// checkPW() {
//   if (this.password !== this.confirmPW) {
//     return <span className="error">Passwords are not equal.</span>
//   }
// }

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
            <div className="FormField">
              
              {/* First and Last Name */}
              <label className="FormField_LeftLabel" htmlFor="firstname">First Name</label>
              <label className="FormField_RightLabel FormField_LastName" htmlFor="lastname">Last Name</label>
              <div>
                {/* First Name Field */}
                <input type="text" name="firstname" id="firstname" className="FormField_Input" placeholder="Enter your first name" value={this.state.firstname} onChange={this.handleChange} required />
                {/* Last Name Field */}
                <input type="text" name="lastname" id="lastname" className="FormField_Input FormField_RightInput" placeholder="Enter your last name" value={this.state.lastname} onChange={this.handleChange} required />
              </div>
            </div>
            
            {/* Username and Email */}
            <div className="FormField">
              <label className="FormField_LeftLabel" htmlFor="username">Username</label>
              <label className="FormField_RightLabel FormField_Email" htmlFor="email">Email Address</label>
              <div>
                {/* Username Field */}
                <input type="text" name="username" id="username" className="FormField_Input" placeholder="Enter your username" value={this.state.username} onChange={this.handleChange} />
                {/* Email Field */}
                <input type="email" name="email" id="email" className="FormField_Input FormField_RightInput" placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} required/>
              </div>
            </div>

            {/* Password and Confirmation */}
            <div className="FormField">
                <label className="FormField_LeftLabel" htmlFor="password">Password</label>
                <label className="FormField_RightLabel FormField_ConfirmPW" htmlFor="password">Confirm Password</label>

                <div>
                  {/* Password */}
                  <input type="password" name="password" id="password" className="FormField_Input" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange}pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" required title="Must contain at least one uppercase and lowercase letter, one number, and contain 6 or more characters" />
                  {/* Password Confirmation */}
                  <input type="password" name="confirmPW" id="confirmPW" className="FormField_Input FormField_RightInput" placeholder="Enter your password" value={this.state.confirmPW} onChange={this.handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" required title="Must contain at least one uppercase and lowercase letter, one number, and contain 6 or more characters"/>
                </div>
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