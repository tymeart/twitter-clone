import React from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const options = [
    'Share via Direct Message',
    'Copy link to Tweet',
    'Embed Tweet',
    'Pin to your profile page',
    'Delete Tweet'
  ];
  const dropdownItems = options.map(option => {
    return (
      <li
        key={option}
        className="DropdownItem"
      >
        {option}
      </li>
    );
  });

  return (
    <ul className="Dropdown">
      {dropdownItems}
    </ul>
  );
}

export default Dropdown;
