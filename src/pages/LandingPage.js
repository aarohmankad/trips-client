import React, { Component } from 'react';

import TripsList from '../components/TripsList';

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

        {localStorage.getItem('trips-user') && <TripsList />}
      </div>
    );
  }
}

export default LandingPage;
