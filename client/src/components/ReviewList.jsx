import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews }) => (
  reviews.map((review) => <ReviewItem review={review} />)
);

export default ReviewList;
