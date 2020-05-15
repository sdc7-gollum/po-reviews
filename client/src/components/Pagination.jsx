import React from 'react';
import $ from 'jquery';
import styles from './Pagination.css';

const Pagination = ({ numReviews, paginate }) => {
  const pages = [];
  const numPages = Math.ceil(numReviews / 7);
  for (let i = 1; i <= numPages; i += 1) {
    pages.push(i);
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    const currentPage = e.target.value;
    $(`.pageButton-${currentPage}`).css({
      color: '#00A699',
      border: 'none',
      'font-weight': 'bold',
    });
    for (let i = 0; i < pages.length; i += 1) {
      if (pages[i] === Number(currentPage)) {
        continue;
      } else {
        $(`.pageButton-${pages[i]}`).css({
          color: 'grey',
          border: 'none',
          'font-weight': 'normal',
        });
      }
    }
    paginate(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <ul>
        {pages.map((page) => (
          <li key={page} className={styles.pagination}>
            <input type="button" className={`pageButton-${page} ${styles.pageButton}`} onClick={(e) => onClickHandler(e)} value={page} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
