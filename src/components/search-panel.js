import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '20px',
    lineHeight: '30px',
  };
  return <input style={searchStyle} type="text" placeholder={searchText} />;
};

export default SearchPanel;
