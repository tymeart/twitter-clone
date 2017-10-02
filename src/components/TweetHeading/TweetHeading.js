import React from 'react';

const TweetHeading = (props) => {
  return (
    <div>
      <span>@tymeart</span>
      <span>{props.givenName}</span>
      <span>1hr</span>
      <span>caret</span>
    </div>
  );
};

export default TweetHeading;
