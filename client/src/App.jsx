import React, { Component } from 'react';
import Header from './components/Header';
import Ratings from './components/Ratings';
import ReviewList from './components/ReviewList';
import Pagination from './components/Pagination';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentPage: 1,
    };
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const id = window.location.href.split('?')[1];
    fetch(`/api/reviews/${id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ reviews: res }))
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
      if (ratings[category] === 0 || reviews.length === 0) {
        ratings[category] = '0.0';
      } else {
        ratings[category] = (ratings[category] / reviews.length).toFixed(1);
      }
    }
    return ratings;
  }

  paginate(page) {
    this.setState({
      currentPage: page,
    });
  }

  render() {
    const { reviews, currentPage } = this.state;
    const currentReviews = reviews.slice(currentPage * 7 - 7, currentPage * 7);
    return (
      <div className={styles.wrapper}>
        <Header totalRating={this.getTotalRating()} numReviews={reviews.length} />
        <hr className={styles.divider} />
        <Ratings categoryRatings={this.getCategoryRatings()} />
        <ReviewList reviews={currentReviews} />
        <Pagination numReviews={reviews.length} paginate={this.paginate} currentPage={currentPage} />
      </div>
    );
  }
}

export default App;
