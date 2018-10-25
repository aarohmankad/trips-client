import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Logo from './images/trips-icon.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Logo">
            <img src={Logo} width="100" alt=""/>
          </div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/sign-in" component={SignInForm} />
          <Route path="/sign-up" component={SignUpForm} />
        </div>
      </Router>
    );
  }
}

export default App;