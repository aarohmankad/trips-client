import React, { Component } from 'react';
import '../styles/HomePage.css';
import '../styles/Forms.css';

class HomePage extends Component {

	constructor() {
		super();

		this.state = {
			location: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log('The form was submitted with the following data:');
		console.log(this.state);
	}

  render() {
    return (
      <div className="HomePage">
        <div className="HomePage_Center">
          <h1 className="">
            Where would you like to go today?
          </h1>
					<form className="FormFields" onSubmit={this.handleSubmit}>
						{/* Location to Search */}
						<div className="">
							<div className="FormField_40">
								<input
									type="text"
									id="location"
									className="FormField_Input FormField_SignIn"
									placeholder="Enter a location"
									name="location"
									value={this.state.location}
									onChange={this.handleChange}
									required
								/>
							</div>
						</div>
					</form>
				</div>
      </div>
    );
  }
}

export default HomePage;