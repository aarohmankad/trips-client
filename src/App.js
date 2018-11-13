import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Search from './pages/Search';
import Logo from './images/trips-icon.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <Link to="/">
              <div className="Logo">
                <img src={Logo} width="64" alt="" />
              </div>
            </Link>

            {localStorage.getItem('trips-user') ? (
              <Button
                className="button"
                onClick={() => localStorage.removeItem('trips-user')}
              >
                Sign Out
              </Button>
            ) : (
              <div>
                <Link to="/signin">
                  <Button className="button">Sign In </Button>
                </Link>
                <Link to="/signup">
                  <Button className="button">Register</Button>
                </Link>
              </div>
            )}
          </div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Register} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
