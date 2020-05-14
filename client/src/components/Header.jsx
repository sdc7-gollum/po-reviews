import React from 'react';

const Header = ({ totalRating, numReviews }) => (
  <div className="header-container">
    <h1 className="header-title">Reviews</h1>
    <div className="total-rating-div">
      <span className="star" />
      <span className="total-rating">{totalRating}</span>
    </div>
    <div className="num-reviews-div">
      <span>{numReviews}</span>
      <span className="num-reviews-text"> reviews</span>
    </div>
  </div>
);

export default Header;
