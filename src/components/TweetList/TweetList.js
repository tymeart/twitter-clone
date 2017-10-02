import React from 'react';
import Tweet from '../Tweet/Tweet';

const TweetList = (props) => {
  const tweets = props.tweets.map(tweet => <Tweet user={user} content={tweet.content}/>);

  return (
    <ul>
      {tweets}
    </ul>
  );
}

export default TweetList;
