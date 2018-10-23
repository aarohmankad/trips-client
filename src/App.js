import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App_LeftMargin" />

          <div className="App_Form">
            {/* Routing Path to Different Pages */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/sign-up" component={SignUpForm} />
          </div>

          <div className="App_RightMargin" />
        </div>
      </Router>
    );
  }
}

export default App;
