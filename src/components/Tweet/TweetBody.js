import React from 'react';
import './Tweet.css'

const TweetBody = (props) => {
  return (
    <p className="TweetBody">{props.content}</p>
  );
}

export default TweetBody;
