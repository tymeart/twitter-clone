import React from 'react';
import Tweet from '../Tweet/Tweet';

const TweetList = (props) => {
  const tweets = props.user.tweets.map(tweet => {
    return (
      <Tweet
        key={tweet.id}
        user={props.user}
        content={tweet.content}
        reactions={tweet.reactions}
      />
    );
  });

  return (
    <ul>
      {tweets}
    </ul>
  );
}

export default TweetList;
