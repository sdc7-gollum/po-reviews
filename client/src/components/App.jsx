import React, { Component } from 'react';
import ReviewItem from './ReviewItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Decided to hardcode sample data for this particular branch
      // Planning to create a separate branch for dynamic rendering of reviews
      name: 'Abbe',
      date: 'February 2020',
      body: 'This spot is perfect for a visit to the city of San Francisco. The en suite room has all the amenities you\'ll need, and everything is spotless. Jeff and Mike are incredibly welcoming and attentive, and the space is comfortable and cozy. Jeff and Mike gave lots of recommendations before I arrived and also pointed me to terrific dining areas just around the corner once I was ready to explore. The space is safe for a woman traveling alone, and the hosts are very quick to respond to any request or query. I would return to this location without hesitation. Thank you, Jeff and Mike!',
      pic: 'https://a0.muscache.com/im/users/22735322/profile_pic/1416481027/original.jpg?aki_policy=profile_x_medium',
    };
  }

  render() {
    const { name, date, body, pic } = this.state;
    return (
      <div>
        <ReviewItem name={name} date={date} body={body} pic={pic} />
      </div>
    );
  }
}

export default App;
