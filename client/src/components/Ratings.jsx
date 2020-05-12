import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

const Ratings = ({ categoryRatings }) => {
  Object.keys(categoryRatings).forEach((category) => {
    const barLength = categoryRatings[category] * 20;
    $(`.${category}-bar`).css('width', barLength);
  });

  return (
    <div className="ratings-container checkin">
      <div className="rating-container">
        <span className="rating-title">Check-in</span>
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay checkin-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.checkin}</span>
      </div>
      <div className="rating-container communication">
        <span className="rating-title">Communication</span>
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay communication-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.communication}</span>
      </div>
      <div className="rating-container accuracy">
        <span className="rating-title">Accuracy</span>
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay accuracy-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.accuracy}</span>
      </div>
      <div className="rating-container cleanliness">
        <span className="rating-title">Cleanliness</span>
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay cleanliness-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.cleanliness}</span>
      </div>
      <div className="rating-container location">
        <span className="rating-title">Location</span>
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay location-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.location}</span>
      </div>
      <div className="rating-container value">
        <span className="rating-title">Value</span>
        <span className="rating-bar">
          <span className="rating-bar-bg" />
          <span className="rating-bar-overlay value-bar" />
        </span>
        <span className="rating-stat">{categoryRatings.value}</span>
      </div>
    </div>
  );
};

Ratings.propTypes = {
  categoryRatings: PropTypes.object.isRequired,
};

export default Ratings;
