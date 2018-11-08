import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
<<<<<<< .merge_file_PtiL3v
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import HomePage from './pages/HomePage';
=======
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import Search from './pages/Search';
>>>>>>> .merge_file_kHmWIz
import Logo from './images/trips-icon.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
<<<<<<< .merge_file_PtiL3v
          <div className="Logo">
            <img src={Logo} width="100" alt=""/>
          </div>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/sign-in" component={SignInForm} />
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/home" component={HomePage} />
=======
          <Link to="/">
            <div className="Logo">
              <img src={Logo} width="100" alt="" />
            </div>
          </Link>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Register} />
          <Route path="/search" component={Search} />
>>>>>>> .merge_file_kHmWIz
        </div>
      </Router>
    );
  }
}

export default App;
