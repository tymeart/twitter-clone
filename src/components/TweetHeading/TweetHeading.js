import React from 'react';
import FontAwesome from 'react-fontawesome';
import './TweetHeading.css';

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
        />
      </span>
    </div>
  );
};

export default TweetHeading;
