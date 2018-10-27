import React, { Component } from 'react';
import '../styles/ExplorePage.css';

class ExplorePage extends Component {
  render() {
    return (
      <div className="ExplorePage">
        {/* <div className="Explore">
          <h1>Explore</h1>
        </div> */}
        <div className="grid">
          <div className="Reservations">Reservations</div>
          <div className="ThingsToDo">Things To Do</div>
          <div className="SavedPlaces">Saved Places</div>
          <div className="DayPlans">Day Plans</div>
          <div className="Discounts">Discounts</div>
          <div className="FoodAndDrink">Food And Drink</div>
        </div>
      </div>
    );
  }
}

export default ExplorePage;