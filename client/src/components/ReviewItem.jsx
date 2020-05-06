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
    const { body } = this.props;
    const desc = `${body.split('').slice(0, 300).join('')}...`;
    return desc;
  }

  render() {
    const { name, date, body, pic } = this.props;
    const { shortened } = this.state;
    return (
      <div className="review">
        <img src={pic} alt="test" className="image" />
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="date">
          <span>{date}</span>
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
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

export default ReviewItem;
