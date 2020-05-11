import React, { Component } from 'react';
import Header from './components/Header';
import Ratings from './components/Ratings';
import ReviewList from './components/ReviewList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const id = window.location.href.split('?')[1];
    fetch(`/api/reviews/${id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ reviews: res[0].reviews }))
      .catch((err) => console.log(err));
  }

  getTotalRating() {
    const { reviews } = this.state;
    let totalSum = 0;
    reviews.forEach((review) => {
      totalSum += review.r_accuracy + review.r_checkin + review.r_cleanliness + review.r_communication + review.r_location + review.r_value;
    });
    const average = (totalSum / (6 * reviews.length)).toFixed(2);
    return average;
  }

  getCategoryRatings() {
    const { reviews } = this.state;
    const ratings = {
      accuracy: 0,
      checkin: 0,
      cleanliness: 0,
      communication: 0,
      location: 0,
      value: 0,
    };
    reviews.forEach((review) => {
      ratings.accuracy += review.r_accuracy;
      ratings.checkin += review.r_checkin;
      ratings.cleanliness += review.r_cleanliness;
      ratings.communication += review.r_communication;
      ratings.location += review.r_location;
      ratings.value += review.r_value;
    });
    for (let i = 0; i < Object.keys(ratings).length; i += 1) {
      const category = Object.keys(ratings)[i];
      ratings[category] = (ratings[category] / reviews.length).toFixed(1);
    }
    return ratings;
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <Header totalRating={this.getTotalRating()} numReviews={reviews.length} />
        <hr className="divider" />
        <Ratings categoryRatings={this.getCategoryRatings()} />
        <hr className="divider" />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;
