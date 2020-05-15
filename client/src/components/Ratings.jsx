import React from 'react';
import $ from 'jquery';
import styles from './Ratings.css';

const Ratings = ({ categoryRatings }) => {
  Object.keys(categoryRatings).forEach((category) => {
    const barLength = categoryRatings[category] * 20;
    $(`.${category}Bar`).css('width', barLength);
  });

  return (
    <div className={styles.ratingsContainer}>
      <span className={`${styles.ratingTitle} ${styles.checkinTitle}`}>Check-in</span>
      <span className={styles.checkinRating}>
        <span className={styles.ratingBar}>
          <span className={styles.ratingBarBG} />
          <span className={`${styles.ratingBarOverlay} checkinBar`} />
        </span>
        <span className={styles.ratingStat}>{categoryRatings.checkin}</span>
      </span>
      <span className={`${styles.ratingTitle} ${styles.communicationTitle}`}>Communication</span>
      <span className={styles.communicationRating}>
        <span className={styles.ratingBar}>
          <span className={styles.ratingBarBG} />
          <span className={`${styles.ratingBarOverlay} communicationBar`} />
        </span>
        <span className={styles.ratingStat}>{categoryRatings.communication}</span>
      </span>
      <span className={`${styles.ratingTitle} ${styles.accuracyTitle}`}>Accuracy</span>
      <span className={styles.accuracyRating}>
        <span className={styles.ratingBar}>
          <span className={styles.ratingBarBG} />
          <span className={`${styles.ratingBarOverlay} accuracyBar`} />
        </span>
        <span className={styles.ratingStat}>{categoryRatings.accuracy}</span>
      </span>
      <span className={`${styles.ratingTitle} ${styles.cleanlinessTitle}`}>Cleanliness</span>
      <span className={styles.cleanlinessRating}>
        <span className={styles.ratingBar}>
          <span className={styles.ratingBarBG} />
          <span className={`${styles.ratingBarOverlay} cleanlinessBar`} />
        </span>
        <span className={styles.ratingStat}>{categoryRatings.cleanliness}</span>
      </span>
      <span className={`${styles.ratingTitle} ${styles.locationTitle}`}>Location</span>
      <span className={styles.locationRating}>
        <span className={styles.ratingBar}>
          <span className={styles.ratingBarBG} />
          <span className={`${styles.ratingBarOverlay} locationBar`} />
        </span>
        <span className={styles.ratingStat}>{categoryRatings.location}</span>
      </span>
      <span className={`${styles.ratingTitle} ${styles.valueTitle}`}>Value</span>
      <span className={styles.valueRating}>
        <span className={styles.ratingBar}>
          <span className={styles.ratingBarBG} />
          <span className={`${styles.ratingBarOverlay} valueBar`} />
        </span>
        <span className={styles.ratingStat}>{categoryRatings.value}</span>
      </span>
    </div>
  );
};

export default Ratings;
