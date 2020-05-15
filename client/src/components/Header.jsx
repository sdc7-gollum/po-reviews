import React from 'react';
import styles from './Header.css';

const Header = ({ totalRating, numReviews }) => (
  <div className={styles.headerContainer}>
    <h1 className={styles.headerTitle}>Reviews</h1>
    <div className={styles.totalRatingDiv}>
      <span className={styles.star} />
      <span className={styles.totalRating}>{totalRating}</span>
    </div>
    <div className={styles.numReviewsDiv}>
      <span>{numReviews}</span>
      <span className={styles.numReviewsText}> reviews</span>
    </div>
  </div>
);

export default Header;
