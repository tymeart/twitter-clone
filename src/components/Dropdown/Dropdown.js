import React from 'react';

const Dropdown = () => {
  const options = [
    'Share via Direct Message',
    'Copy link to Tweet',
    'Embed Tweet',
    'Pin to your profile page',
    'Delete Tweet'
  ];
  const dropdownItems = options.map(option => <li key={option}>{option}</li>);

  return (
    {dropdownItems}
  );
}

export default Dropdown;
