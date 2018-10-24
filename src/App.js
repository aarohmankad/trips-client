import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './pages/navigation';
import Calendar from './pages/Calendar';
import './App.css';

class App extends React.Component {
  render() {
    return (
		<Router>
			<div className="App">
				<div className="App_Form">
				{/* routing path to different options */}
					<Route exact path="/" component={Navigation} />
					<Route path="/Calendar" component={Calendar} />
				</div>
				
				<main>
				
					
				</main>
				
				
			</div>
		</Router>
	);
  }
}

export default App;
