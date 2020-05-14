import React from 'react';
import $ from 'jquery';

const Ratings = ({ categoryRatings }) => {
  Object.keys(categoryRatings).forEach((category) => {
    const barLength = categoryRatings[category] * 20;
    $(`.${category}-bar`).css('width', barLength);
  });

  return (
    <div className="ratings-container">
      <span className="rating-title checkin-title">Check-in</span>
      <span className="checkin-rating">
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay checkin-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.checkin}</span>
      </span>
      <span className="rating-title communication-title">Communication</span>
      <span className="communication-rating">
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay communication-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.communication}</span>
      </span>
      <span className="rating-title accuracy-title">Accuracy</span>
      <span className="accuracy-rating">
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay accuracy-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.accuracy}</span>
      </span>
      <span className="rating-title cleanliness-title">Cleanliness</span>
      <span className="cleanliness-rating">
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay cleanliness-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.cleanliness}</span>
      </span>
      <span className="rating-title location-title">Location</span>
      <span className="location-rating">
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay location-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.location}</span>
      </span>
      <span className="rating-title value-title">Value</span>
      <span className="value-rating">
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay value-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.value}</span>
      </span>
    </div>
  );
};

export default Ratings;
