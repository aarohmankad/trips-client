import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="LandingPage_Center">
          <h1>
            Welcome to&nbsp;
            <span className="blueText">G</span>
            <span className="redText">o</span>
            <span className="yellowText">o</span>
            <span className="blueText">g</span>
            <span className="greenText">l</span>
            <span className="redText">e</span>
            &nbsp;Trips
          </h1>
					<div id="wrap">
						{/* Sign In & Sign Up Buttons */}
						{/* <div className="GetStarted"> */}
							<NavLink to="/sign-in" className="GetStarted_Link">
								Sign In
							</NavLink>
							&nbsp;&nbsp;&nbsp;&nbsp;
						{/* </div> */}
						{/* <div className="GetStarted"> */}
							<NavLink to="/sign-up" className="GetStarted_Link">
								Sign Up
							</NavLink>
						{/* </div> */}
					</div>
				</div>
      </div>
    );
  }
}

export default LandingPage;