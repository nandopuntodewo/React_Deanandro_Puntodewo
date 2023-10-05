import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './Newscard';



const NewsList = ({ category }) => {
    const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = '22fbfc2423e1456581f1c1204ff24354';
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, [category]);

  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map(article => (
          <NewsCard key={article.title} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
