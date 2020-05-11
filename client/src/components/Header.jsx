import React from 'react';
import PropTypes from 'prop-types';

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

Header.propTypes = {
  totalRating: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
};

export default Header;
