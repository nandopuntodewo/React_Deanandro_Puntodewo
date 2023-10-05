// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NewsCategorySelector from './Components/NewsCategorySelector';
import NewsList from './Components/NewsList';

function App() {
  const [category, setCategory] = useState('general');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Interactive News Portal</h1>
        <NewsCategorySelector onCategoryChange={handleCategoryChange} />
        <NewsList category={category} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
