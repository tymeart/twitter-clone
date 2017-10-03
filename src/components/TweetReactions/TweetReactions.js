import React from 'react';
import FA from 'react-fontawesome';

const TweetReactions = (props) => {
  return (
    <div>
      <FA name="comment-o"/><span>{props.reactions.comments}</span>
      <FA name="retweet" /><span>{props.reactions.retweets}</span>
      <FA name="heart-o" /><span>{props.reactions.likes}</span>
    </div>
  );
}

export default TweetReactions;
