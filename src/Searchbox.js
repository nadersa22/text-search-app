import React, { useState } from 'react';
import './Searchbox.css';

function SearchBox({ articles, onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    
    // Call the parent's search function
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={handleSearch}
          className="search-input"
          aria-label="Search articles"
        />
        {query && (
          <button 
            className="clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      <div className="search-info">
        {query ? (
          <span>Searching in {articles.length} articles...</span>
        ) : (
          <span>Type to search in {articles.length} articles</span>
        )}
      </div>
    </div>
  );
}

export default SearchBox;