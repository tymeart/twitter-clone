import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import TweetHeading from '../TweetHeading/TweetHeading';
import TweetBody from '../TweetBody/TweetBody';
import TweetReactions from '../TweetReactions/TweetReactions';
import './Tweet.css';

const Tweet = (props) => {
  return (
    <li className="Tweet">
      <UserAvatar avatar={props.user.avatar} />
      <span className="TweetText">
        <TweetHeading givenName={props.user.givenName} />
        <TweetBody content={props.content} />
        <TweetReactions reactions={props.reactions} />
      </span>
    </li>
  );
}

export default Tweet;
