import React from 'react';
import $ from 'jquery';
import styles from './Pagination.css';

const Pagination = ({ numReviews, paginate, currentPage }) => {
  const pages = [];
  const numPages = Math.ceil(numReviews / 7);
  for (let i = 1; i <= numPages; i += 1) {
    pages.push(i);
  }

  const onClickHandler = (e) => {
    paginate(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {pages.map((page) => (
        page === Number(currentPage)
          ? (
            <span key={page} className={styles.pagination}>
              <input type="button" className={`${styles.pageButton} ${styles.pageButtonClicked}`} onClick={(e) => onClickHandler(e)} value={page} />
            </span>
          )
          : (
            <span key={page} className={styles.pagination}>
              <input type="button" className={`${styles.pageButton} ${styles.pageButtonUnclicked}`} onClick={(e) => onClickHandler(e)} value={page} />
            </span>
          )
      ))}
    </div>
  );
};

export default Pagination;
