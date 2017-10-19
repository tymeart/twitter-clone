import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ user, handleTweetOptionButtonClick, displayTweetOptions }) => {
  const tweets = [...user.tweets].reverse().map(tweet => {
    return (
      <Tweet
        key={tweet.id}
        user={user}
        content={tweet.content}
        reactions={tweet.reactions}
        handleTweetOptionButtonClick={handleTweetOptionButtonClick}
        displayTweetOptions={displayTweetOptions}
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
