import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';

const Tweet = (props) => {
  return (
    <li>
      <UserAvatar avatar={props.user.avatar} />
      <TweetHeading givenName={props.user.givenName} />
      <TweetBody content={props.content} />
      <TweetReactions reactions={props.reactions} />
    </li>
  );
}

export default Tweet;
