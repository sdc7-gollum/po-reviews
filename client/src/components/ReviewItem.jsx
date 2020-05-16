import React, { Component } from 'react';
import styles from './ReviewItem.css';

class ReviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortened: true,
    };
  }

  onClickHandler(e) {
    e.preventDefault();
    this.setState({
      shortened: false,
    });
  }

  getShortenedDesc() {
    const { review } = this.props;
    const { body } = review;
    const desc = `${body.split('').slice(0, 300).join('')}...`;
    return desc;
  }

  formatDate() {
    const { review } = this.props;
    const { date } = review;
    const formattedDate = new Date(date);
    return formattedDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }

  render() {
    const { review } = this.props;
    const { name, body, pic } = review;
    const { shortened } = this.state;
    return (
      <div className="wrapper">
        <div className={styles.review}>
          <img src={pic} alt="test" className={styles.image} />
          <div className={styles.name}>
            <span>{name}</span>
          </div>
          <div className={styles.date}>
            <span>{this.formatDate()}</span>
          </div>
          <div className={styles.desc}>
            {shortened ? (
              <div>
                <span>{this.getShortenedDesc()}</span>
                <span className={styles.readMore} onClick={(e) => this.onClickHandler(e)}>Read More</span>
              </div>
            ) : <span>{body}</span> }
          </div>
        </div>
        <hr className={styles.divider} />
      </div>
    );
  }
}

export default ReviewItem;
