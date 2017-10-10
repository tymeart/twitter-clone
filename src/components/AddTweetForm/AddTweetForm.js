import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './AddTweetForm.css';

const AddTweetForm = (props) => {
  return (
    <div className="AddTweetForm">
      <UserAvatar avatar={props.avatar}/>
      <form>
        <textarea
          type="text"
          placeholder="What's happening?"
          value={props.tweetToAdd}
          onChange={props.handleInputChange}
        />
        <div className="charCount-btn-group">
          <div className="charCount">{props.charCount}</div>
          <button onClick={props.handleAddTweet}>Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default AddTweetForm;
