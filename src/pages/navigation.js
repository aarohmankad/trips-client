import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
	render() {
		return(
			<div className="Navigate">
				<div className="Planner">
					<NavLink to="/Calendar" className="Calendar_Link">
						Calendar
					</NavLink>
				</div>
			</div>
		
		
		)	
	}


}


export default Navigation;