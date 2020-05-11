import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div className="review">
        <img src={pic} alt="test" className="image" />
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="date">
          <span>{this.formatDate()}</span>
        </div>
        <div className="desc">
          {shortened ? (
            <div>
              <span>{this.getShortenedDesc()}</span>
              <span className="read-more" onClick={(e) => this.onClickHandler(e)}>Read More</span>
            </div>
          ) : <span>{body}</span> }
        </div>
      </div>
    );
  }
}

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

export default ReviewItem;
