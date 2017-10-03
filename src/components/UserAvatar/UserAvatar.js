import React from 'react';
import './UserAvatar.css';

const UserAvatar = (props) => {
  return (
    <img src={`${props.avatar}`} alt="tymeart's avatar" />
  );
}

export default UserAvatar;
