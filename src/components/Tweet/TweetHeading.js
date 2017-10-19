import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Tweet.css';
import Dropdown from '../Dropdown/Dropdown';

const TweetHeading = (props) => {
  return (
    <div className="TweetHeading">
      <span className="name-and-time">
        <span className="given-name">{props.givenName}</span>
        <span>@tymeart</span>
        <span className="time">1h</span>
      </span>
      <span className="chevron">
        <FontAwesome
          name="chevron-down"
          onClick={props.handleTweetOptionButtonClick}
        />
        {props.displayTweetOptions && <Dropdown />}
      </span>
    </div>
  );
};

export default TweetHeading;
