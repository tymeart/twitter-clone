import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import FA from 'react-fontawesome';
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
        <div className="bottom-group">
          <div className="bottom-group-icons">
            <FA name="picture-o" />
            <FA name="video-camera" />
            <FA name="pie-chart" />
            <FA name="map-marker" />
          </div>
          <div className="bottom-group-right">
            <div className="charCount">{props.charCount}</div>
            <button onClick={props.handleAddTweet}>Tweet</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTweetForm;
