import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ user }) => {
  const tweets = [...user.tweets].reverse().map(tweet => {
    return (
      <Tweet
        key={tweet.id}
        user={user}
        content={tweet.content}
        reactions={tweet.reactions}
      />
    );
  });

  return (
    <ul className="TweetList">
      {tweets}
    </ul>
  );
}

export default TweetList;
