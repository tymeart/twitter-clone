import React from 'react';
import FA from 'react-fontawesome';
import './TweetReactions.css';

const TweetReactions = (props) => {
  const commentsNum = props.reactions.comments === 0 ? null : props.reactions.comments;
  const retweetsNum = props.reactions.retweets === 0 ? null : props.reactions.retweets;
  const likesNum = props.reactions.likes === 0 ? null : props.reactions.likes;

  return (
    <div className="TweetReactions">
      <div><FA name="comment-o"/>{commentsNum}</div>
      <div><FA name="retweet" />{retweetsNum}</div>
      <div><FA name="heart-o" />{likesNum}</div>
      <div><FA name="bar-chart-o" /></div>
    </div>
  );
}

export default TweetReactions;
