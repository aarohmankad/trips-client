import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import Logo from './images/trips-icon.png';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <div className="Logo">
              <img src={Logo} width="100" alt=""/>
            </div>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/sign-up" component={SignUpForm} />
            <Route path="/home" component={HomePage} />
            <Route path="/explore" component={ExplorePage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;