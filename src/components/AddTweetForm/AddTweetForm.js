import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './AddTweetForm.css';

const AddTweetForm = (props) => {
  return (
    <div className="AddTweetForm">
      <UserAvatar avatar={props.avatar}/>
      <form>
        <input type="text" placeholder="What's happening?"/>
        <button>Tweet</button>
      </form>
    </div>
  );
};

export default AddTweetForm;
