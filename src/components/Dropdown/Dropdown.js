import React from 'react';
import './Dropdown.css';

const Dropdown = () => {
  return (
    <ul className="dropdown-content">
      <li className="dropdown-item">Share via Direct Message</li>
      <li className="dropdown-item">Copy link to Tweet</li>
      <li className="dropdown-item">Embed Tweet</li>
      <li className="dropdown-item">Pin to your profile page</li>
      <li className="dropdown-item">Delete Tweet</li>
    </ul>
  );
}

export default Dropdown;
