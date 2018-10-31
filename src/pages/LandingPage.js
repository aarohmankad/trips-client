import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <h1 className="landing-page-slide">
          <span className="blueText">G</span>
          <span className="redText">o</span>
          <span className="yellowText">o</span>
          <span className="blueText">g</span>
          <span className="greenText">l</span>
          <span className="redText">e</span>
          &nbsp;Trips
        </h1>
        <div>
          <Link to="/signin">
            <Button variant="contained" color="primary" size="large">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="contained" color="primary" size="large">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
