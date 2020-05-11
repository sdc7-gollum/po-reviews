import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => (
  reviews.map((review) => <ReviewItem review={review} />)
);

ReviewList.propTypes = {
  categoryRatings: PropTypes.object.isRequired,
};

export default ReviewList;
