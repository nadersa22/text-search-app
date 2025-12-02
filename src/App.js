import React, { useState } from 'react';
import './App.css';
import ArticleList from './ArticleList';
import { articles } from './articles';
import SearchBox from './Searchbox';
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (query) => {
    const queryLower = (query || '').toLowerCase();

    setSearchQuery(queryLower);

    if (query.trim() === '') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article => {
        const title = article.title || '';
        const body = article.body || '';
        const summary = article.summary || '';
        const combined = `${title} ${summary} ${body}`.toLowerCase();

        return combined.includes(queryLower);

      });
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Articles Search</h1>
        <p>bitsofcode. Articles on Frontend Development</p>
      </header>

      <main className="App-main">
        <SearchBox
          articles={articles}
          onSearch={handleSearch}
        />

        <div className="results-count">
          <strong>{filteredArticles.length}</strong> posts were found
          {searchQuery && ` for "${searchQuery}"`}
        </div>

        <ArticleList
          articles={filteredArticles}
          searchQuery={searchQuery}
        />
      </main>
    </div>
  );
}

export default App;