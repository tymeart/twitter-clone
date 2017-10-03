import React from 'react';
import FontAwesome from 'react-fontawesome';
import './TweetHeading.css';

const TweetHeading = (props) => {
  return (
    <div className="TweetHeading">
      <span className="given-name">{props.givenName}</span>
      <span>@tymeart</span>
      <span>1hr</span>
      <FontAwesome
        name="chevron-down"
      />
    </div>
  );
};

export default TweetHeading;
