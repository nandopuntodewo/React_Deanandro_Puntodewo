// components/NewsCard.js
import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-auto rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
      <p className="text-gray-600">{article.source.name || article.author}</p>
      <p className="text-gray-600">{article.publishedAt}</p>
      <p className="mt-2">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block hover:underline"
      >
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
