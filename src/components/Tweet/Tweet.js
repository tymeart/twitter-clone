import React from 'react';

const Tweet = () => {
  return (
    <li>
      <UserAvatar />
      <TweetHeading />
      <TweetBody />
      <TweetReactions />
    </li>
  );
}

export default Tweet;
