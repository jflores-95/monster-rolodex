import React from 'react';
import './search-box.styles.css';

const SearchboxComponent = ({placeholder, handleChange}) => {
    return (
        <input
        className='search'
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        ></input>
    );
}

export default SearchboxComponent;
