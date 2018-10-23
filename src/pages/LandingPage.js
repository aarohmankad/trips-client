import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return(
          
          <div className="LandingPage">
            <div>
              <h1>Welcome to&nbsp; 
                <span className='blueText'>G</span>
                <span className='redText'>o</span>
                <span className='yellowText'>o</span>
                <span className='blueText'>g</span>
                <span className='greenText'>l</span>
                <span className='redText'>e</span>
                &nbsp;Trips</h1>
            </div>
            
            {/* Sign In & Sign Up Buttons */}
            <div className="GetStarted">
              <NavLink to="/sign-in" className="GetStarted_Link">Click Here to Get Started</NavLink>
            </div>
          </div>
        );
    }
}

export default LandingPage;