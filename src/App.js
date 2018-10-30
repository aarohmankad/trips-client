import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Logo from './images/trips-icon.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">
            <div className="Logo">
              <img src={Logo} width="100" alt="" />
            </div>
          </Link>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
