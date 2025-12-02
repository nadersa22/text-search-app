import React from 'react';
import './ArticleList.css';

function ArticleList({ articles, searchQuery }) {
  
  // Helper function to highlight text
  const highlightText = (text, query) => {
    if (!query || !text) return text;
    
    // Escape special regex characters
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (articles.length === 0) {
    return (
      <div className="no-results">
        <p>No articles found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="article-list">
      {articles.map(article => (
        <div key={article.id} className="article-card">
          <div className="article-category">
            {highlightText(article.category, searchQuery)}
          </div>
          
          <h3 className="article-title">
            {highlightText(article.title, searchQuery)}
          </h3>
          
          <div className="article-date">{article.date}</div>
          
          <p className="article-excerpt">
            {highlightText(article.excerpt, searchQuery)}
          </p>
          
          <div className="article-divider"></div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;